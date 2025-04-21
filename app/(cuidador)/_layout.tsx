import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react';
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#25292e' />
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#ffd33d",
        tabBarStyle: {
          backgroundColor: "#25292e"
        }
      }}
    >
      <Tabs.Screen
      name = "perfil_cuidador"
      options={{
        title: "Perfil cuidador",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={focused ? "person-circle" : "person-circle-outline"}
            color={color}
            size={24}
          />
        )
      }}
      />
      <Tabs.Screen
      name = "lista_cuidador"
      options={{
        title: "Lista cuidador",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={focused ? "list-circle" : "list-circle-outline"}
            color={color}
            size={24}
          />
        )
      }}
      />
    </Tabs>
    </>
  );
}
