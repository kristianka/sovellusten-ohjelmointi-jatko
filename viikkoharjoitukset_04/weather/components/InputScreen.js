import { View, StyleSheet } from "react-native";
import LocationInput from "./LocationInput";
import Header from "./Header";
const InputScreen = ({ city, setCity, setWeather }) => {
    return (
        <View>
            <View>
                <Header city={city} />
            </View>
            <View style={styles.bottomView}>
                <LocationInput city={city} setCity={setCity} setWeather={setWeather} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomView: {
        flex: 0,
        flexDirection: "column"
    }
});

export default InputScreen;
