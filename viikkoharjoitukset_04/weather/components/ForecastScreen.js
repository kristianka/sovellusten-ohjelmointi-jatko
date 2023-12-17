import { Text, View, StyleSheet, FlatList } from "react-native";
import WeatherInfo from "./WeatherInfo";

const ForecastScreen = ({ weather }) => {
    if (!weather) {
        return (
            <View style={styles.middleView}>
                <Text>Insert city on home tab</Text>
            </View>
        );
    }
    return (
        <View style={styles.middleView}>
            {weather && (
                <FlatList
                    data={weather.list}
                    renderItem={({ item }) => <WeatherInfo weather={item} />}
                    keyExtractor={(item) => item.dt.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    middleView: {
        flex: 5,
        flexDirection: "column"
    }
});

export default ForecastScreen;
