import axios from "axios";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Pressable,
    ToastAndroid,
    Linking
} from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";

const OPENWEATHERKEY = "";

const LocationInput = ({ city, setCity, setWeather }) => {
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0
    });

    const fetchWeatherGPS = async () => {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${OPENWEATHERKEY}&units=metric`;
            const res = await axios.get(apiUrl);
            setWeather(res.data);
            setCity(`Coordinates: ${location.lat}, ${location.lon}`);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching weather:", error);
            Alert.alert(
                "Error",
                "Could not fetch weather data. Is the city name correct and api key valid?"
            );
        }
    };

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("No permission to access location");
        } else {
            const location = await Location.getCurrentPositionAsync({});
            setLocation({
                lat: location.coords.latitude,
                lon: location.coords.longitude
            });
            fetchWeatherGPS();
        }
    };

    const openInMaps = () => {
        const encodedCityName = encodeURIComponent(city);
        if (encodedCityName === "") {
            ToastAndroid.show("City name is empty", ToastAndroid.SHORT);
            return;
        }
        const url = `https://www.google.com/maps/place/${encodedCityName}`;
        Linking.openURL(url);
    };

    const openInBrowser = () => {
        const encodedCityName = encodeURIComponent(city);
        if (encodedCityName === "") {
            ToastAndroid.show("City name is empty", ToastAndroid.SHORT);
            return;
        }
        const url = `https://openweathermap.org/find?q=${encodedCityName}`;
        Linking.openURL(url);
    };

    const fetchWeather = async () => {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHERKEY}&units=metric`;
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
            <Pressable style={styles.button} onPress={openInMaps}>
                <Text style={styles.text}>Open location in maps</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={openInBrowser}>
                <Text style={styles.text}>Open weather via browser</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={getLocation}>
                <Text style={styles.text}>Get weather via GPS</Text>
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
