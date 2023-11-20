import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import LocationInput from "./components/LocationInput";

export default function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                {weather ? (
                    <Header city={city} country={weather.sys.country} />
                ) : (
                    <Header city={null} country={null} />
                )}
            </View>
            <View style={styles.middleView}>{weather && <WeatherInfo weather={weather} />}</View>
            <View style={styles.bottomView}>
                <LocationInput city={city} setCity={setCity} setWeather={setWeather} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        flex: 10,
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    middleView: {
        flex: 30,
        flexDirection: "column"
    },
    bottomView: {
        flex: 12,
        flexDirection: "column"
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 50
    }
});
