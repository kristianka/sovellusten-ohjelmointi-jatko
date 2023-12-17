import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";

const App = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        let subscription;
        const subscribeToAccelerometer = async () => {
            try {
                subscription = Accelerometer.addListener(({ x, y, z }) => {
                    setAcceleration({ x, y, z });

                    const newColor = `rgb(
                        ${Math.floor(x * 255)},
                        ${Math.floor(y * 255)},
                        ${Math.floor(z * 255)}
                    )`;

                    setBackgroundColor(newColor);
                });
            } catch (error) {
                console.error("Error subscribing to accelerometer:", error);
            }
        };

        subscribeToAccelerometer();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.text}>X: {acceleration.x.toFixed(2)}</Text>
            <Text style={styles.text}>Y: {acceleration.y.toFixed(2)}</Text>
            <Text style={styles.text}>Z: {acceleration.z.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: "white",
        marginVertical: 10
    }
});

export default App;
