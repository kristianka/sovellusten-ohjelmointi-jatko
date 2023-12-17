import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import SingleWeatherScreen from "./components/SingleWeatherScreen";
import ForecastScreen from "./components/ForecastScreen";
import { NavigationContainer } from "@react-navigation/native";
import InputScreen from "./components/InputScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Tab.Navigator>
                    <Tab.Screen name="Home">
                        {() => (
                            <InputScreen city={city} setCity={setCity} setWeather={setWeather} />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Now">
                        {() => <SingleWeatherScreen weather={weather} />}
                    </Tab.Screen>
                    <Tab.Screen name="Forecast">
                        {() => <ForecastScreen weather={weather} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
