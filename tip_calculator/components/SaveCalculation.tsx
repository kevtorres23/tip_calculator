import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, Modal, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function SaveCalculation() {
    const [modalVisible, setModalVisible] = useState(false);
    const [restaurantName, setRestaurantName] = useState("");

    function saveRestName() {
        setRestaurantName(restaurantName);
        setModalVisible(!modalVisible);
        console.log(restaurantName);
    }

    return (
        <View className="w-full">
            <Modal
                className="modal w-full h-full items-center justify-center"
                animationType="slide"
                transparent={false}
                backdropColor={"transparent"}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View className="items-center justify-center w-full h-full px-10">
                    <View className="bg-white px-6 py-6 rounded-2xl border border-slate-300 gap-4 flex-col">
                        <Text className="font-medium text-lg text-slate-700 text-center">Para guardar tu cálculo, por favor ingresa el nombre del restaurante.</Text>
                        <View className="flex flex-row gap-3">
                            <TextInput value={restaurantName} onChangeText={setRestaurantName} placeholder="Comedor Central" keyboardType="default" className="flex-1 text-lg bg-white placeholder:text-slate-400 rounded-lg w-full px-4 py-3 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
                            </TextInput>
                        </View>
                        <View className="w-full flex-row">
                            <TouchableOpacity onPressOut={saveRestName} className="flex flex-row gap-2 w-full py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                                <Ionicons name="checkmark-outline" size={18} color="white" />
                                <Text className="text-white font-bold text-base">Guardar cálculo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="flex flex-row gap-2 w-full py-3 px-4 bg-indigo-100 border border-indigo-500 items-center justify-center rounded-xl">
                <Ionicons name="wallet" size={18} color="#6366f1" />
                <Text className="text-indigo-500 font-bold text-lg">Guardar cálculo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SaveCalculation;