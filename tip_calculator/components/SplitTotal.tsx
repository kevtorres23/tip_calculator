import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function SplitTotal() {
    const [splitNum, setSplitNum] = useState(1);

    function decrement() {
        if (splitNum > 1) {
            setSplitNum((prevNum) => prevNum - 1)
        }
    }

    function increment() {
        setSplitNum((prevNum) => prevNum + 1)
    }

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
            <View className="flex-1 w-full flex-row">
                <TouchableOpacity onPress={increment} className="minus-btn bg-blue-500 items-center justify-center rounded-l-xl px-4 h-auto">
                    <Text className="text-white font-bold">
                        <AntDesign name="plus" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
                <View className="w-full flex-1 items-center justify-center">
                    <Text className="w-full h-auto py-3 flex text-center text-slate-700 bg-white font-bold text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
                        {splitNum}
                    </Text>
                </View>
                <TouchableOpacity onPress={decrement} className="plus-btn w-auto bg-blue-500 items-center justify-center rounded-r-xl px-4">
                    <Text className="text-white font-bold">
                        <AntDesign name="minus" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplitTotal;