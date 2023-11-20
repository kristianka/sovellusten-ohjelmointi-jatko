import axios from "axios";
import { StyleSheet, Text, View, TextInput, Alert, Pressable } from "react-native";
import React, { useState } from "react";

const OPENWEATHERKEY = "";

const LocationInput = ({ city, setCity, setWeather }) => {
    const fetchWeather = async () => {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERKEY}&units=metric`;
            const res = await axios.get(apiUrl);
            setWeather(res.data);
            // console.log(res.data);
        } catch (error) {
            console.error("Error fetching weather:", error);
            Alert.alert(
                "Error",
                "Could not fetch weather data. Is the city name correct and api key valid?"
            );
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="City name"
                onChangeText={setCity}
                value={city}
            />
            <Pressable style={styles.button} onPress={fetchWeather}>
                <Text style={styles.text}>Get weather</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={fetchWeather}>
                <Text style={styles.text}>Refresh</Text>
            </Pressable>
        </View>
    );
};

export default LocationInput;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
        fontSize: 16
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white"
    }
});
