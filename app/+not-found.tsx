import { Text, View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "not-found" }} />
      <View style={style.container}>
        <Text style={style.Text}>Not Found</Text>
        <Link href='/' style={style.button}>
          Go to back home page
        </Link>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  Text: {
    fontSize: 20,
    color: "white",
  }
});
