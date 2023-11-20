import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const WeatherInfo = ({ weather }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.main}>{Math.floor(weather.main.temp)} °C</Text>
                <Text style={styles.other}>
                    Feels like: {Math.floor(weather.main.feels_like)} °C
                </Text>
                <Text style={styles.other}>Wind: {Math.floor(weather.wind.speed)} m/s</Text>
                <Text style={styles.other}>Humidity: {Math.floor(weather.main.humidity)} %</Text>
            </View>
            {weather.weather[0].icon && (
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                        }}
                    />
                    <Text>
                        {weather.weather[0].main} ({weather.weather[0].description})
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row"
    },
    textContainer: {
        flex: 1
    },
    main: {
        fontSize: 50,
        fontWeight: "bold"
    },
    other: {
        fontSize: 20
    },
    imageContainer: {
        flex: 1
    },
    image: {
        width: 100,
        height: 100
    }
});
export default WeatherInfo;
