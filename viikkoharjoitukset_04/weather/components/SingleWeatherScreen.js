import { Text, View, StyleSheet } from "react-native";
import WeatherInfo from "./WeatherInfo";

const SingleWeatherScreen = ({ weather }) => {
    if (!weather) {
        return (
            <View>
                <Text>Insert city on home tab</Text>
            </View>
        );
    }
    return <View>{weather && <WeatherInfo weather={weather.list[0]} />}</View>;
};

export default SingleWeatherScreen;
