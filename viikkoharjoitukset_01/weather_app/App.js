import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from "react-native";
import React, { useState } from "react";

const OPENWEATHERKEY = "";

export default function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleInputChange = (city) => {
        setCity(city);
    };

    const fetchWeather = async () => {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERKEY}&units=metric`;
            const res = await axios.get(apiUrl);
            setWeather(res.data);
            console.log(res.data);
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
            <StatusBar style="auto" />
            <Text style={styles.title}>Weather app</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="City name"
                    onChangeText={handleInputChange}
                    value={city}
                />
                <Button title="Submit" onPress={fetchWeather} />
            </View>
            {weather && (
                <View style={styles.weather}>
                    <Text style={styles.weather.city}>
                        {weather.name}, {weather.sys.country}
                    </Text>
                    <Text style={styles.weather.main}>{Math.floor(weather.main.temp)} °C</Text>
                    <Text style={styles.weather.description}>
                        Feels like: {Math.floor(weather.main.feels_like)} °C
                    </Text>
                    <Text style={styles.weather.description}>
                        Wind: {Math.floor(weather.wind.speed)} m/s
                    </Text>
                    <Text style={styles.weather.description}>
                        Humidity: {Math.floor(weather.main.humidity)} %
                    </Text>

                    <Text style={styles.weather.description}>
                        {weather.weather[0].main} ({weather.weather[0].description})
                    </Text>
                    {weather.weather[0].icon && (
                        <Image
                            style={styles.weather.image}
                            source={{
                                uri: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                            }}
                        />
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 20
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
    },
    weather: {
        marginTop: 50,
        city: {
            fontSize: 24,
            fontWeight: "bold"
        },
        description: {
            fontSize: 16
        },
        main: {
            fontSize: 20,
            fontWeight: "bold"
        },
        image: {
            width: 100,
            height: 100
        }
    }
});
