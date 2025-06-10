import { Tabs } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { TouchableOpacity, Button, Text } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isUsersModa, setIsUsersModal] = useState(false);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#615fff',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 100,
            margin: 0,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Picaflor-Bold"
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Calculadora",
            headerTitle: "Inicio",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="calculator-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tips_history"
          options={{
            title: "Historial",
            headerTitle: "Historial",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="time-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider >
  );
}
