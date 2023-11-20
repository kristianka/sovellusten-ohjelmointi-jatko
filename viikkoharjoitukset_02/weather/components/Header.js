import { StyleSheet, Text, View } from "react-native";

const Header = ({ city, country }) => {
    return (
        <View>
            {city === null && country === null ? (
                <Text style={styles.title}>Weather app</Text>
            ) : (
                <Text style={styles.title}>
                    {city}, {country}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default Header;
