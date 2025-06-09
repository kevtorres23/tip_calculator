import React from "react";
import { useState, useEffect } from "react";
import { View, Platform, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import WelcomeUser from "@/components/WelcomeUser";

export default function UserSettings() {
    const [usernameList, setUsernameList] = useState([]);

    return (
        <SafeAreaView style={styles.safe} className='bg-slate-100 items-center justify-center'>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View className="flex-1 items-start justify-center w-screen px-8 gap-8">
                    <View className="gap-0">
                        <Text className="font-bold text-2xl text-slate-700">Lista de Usuarios</Text>
                        <Text className="font-normal text-lg text-slate-700">¿No ves tu nombre? Agrégalo a la lista de usuarios de aquí abajo.</Text>
                    </View>
                    <WelcomeUser />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 0 : 20,
        paddingBottom: 20,
    },

    scrollView: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 0,
        paddingVertical: 20,
        width: "auto",
    }
});