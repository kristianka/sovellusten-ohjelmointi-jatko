import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const OPENWEATHERKEY = "4470d758f7c041d49e1c20f4de558e13";

const fetchWeather = async (city) => {
    const res = axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERKEY}`
    );
    if (res.status !== 200) {
        return res.data.message;
    }
    return res.data;
};

export default function App() {
    const [city, setCity] = useState("");

    const handleInputChange = (city) => {
        setCity(city);
    };

    const handleButtonPress = () => {
        Alert.alert("Input Text", city);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ padding: 20 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="City name"
                    onChangeText={handleInputChange}
                    value={city}
                />
                <Button title="Submit" onPress={handleButtonPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
});
