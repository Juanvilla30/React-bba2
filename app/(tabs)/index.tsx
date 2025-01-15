import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style = {style.container}>
      <Text style = {style.Text}>Home screen</Text>
      <Link href="/about" style={style.button}>
        Go to About screen
      </Link>
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
  Text: {
    fontSize: 20,
    color: "white",
  },
  button : {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  }
});
