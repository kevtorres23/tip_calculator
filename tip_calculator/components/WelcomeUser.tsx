import React from "react";
import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

function WelcomeUser() {
    return (
        <View className="w-full gap-5">
            <View className="flex flex-row w-full gap-3">
                <TextInput placeholder="Enter your name" keyboardType="numeric" className="flex-1 text-base bg-white placeholder:text-slate-400 rounded-lg w-full px-4 py-3 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
                </TextInput>

                <TouchableOpacity className="flex-1 flex-row gap-2 w-full py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                    <AntDesign name="check" size={16} color="white" />
                    <Text className="text-white font-bold text-base">Guardar nombre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeUser;