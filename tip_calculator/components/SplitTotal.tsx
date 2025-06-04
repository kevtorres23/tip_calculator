import React from "react";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

function SplitTotal() {
    return (
        <View className="w-full h-auto flex-row gap-8 items-center">
            <View className="flex-col gap-0">
                <Text className="font-semibold text-slate-800 text-lg">
                    Split
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    the total
                </Text>
            </View>
            <View className="w-full h-auto flex-1 flex-row gap-0">
                <View className="minus-btn w-full">
                    <Text></Text>
                </View>
                <TextInput className="w-full"></TextInput>
                <View className="plus-btn w-full">
                    <Text></Text>
                </View>
            </View>
        </View>
    )
}

export default SplitTotal;