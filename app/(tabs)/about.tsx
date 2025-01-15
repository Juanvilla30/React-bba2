import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return( 
        <View style = {style.container}>
            <Text style = {style.title}>About screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "white",
    }
});