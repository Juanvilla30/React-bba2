import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "not-found" }} />
      <View style={style.container}>
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
    fontSize: 20,
    textDecorationLine: "underline",
    color: "white"
  }
});
