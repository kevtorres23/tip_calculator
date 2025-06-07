import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type splitTotalProps = {
    numberChange: (value: number) => void;
}

function SplitTotal(props: splitTotalProps) {
    const [splitNum, setSplitNum] = useState(1);

    useEffect(() => {
        props.numberChange(splitNum);
    })

    function decrement() {
        if (splitNum > 1) {
            setSplitNum((prevNum) => prevNum - 1)
        } else {
            return;
        }
    }

    function increment() {
        setSplitNum((prevNum) => prevNum + 1)
    }

    return (
        <View className="w-full h-auto flex-row gap-4 items-center">
            <View className="flex-col gap-0 w-20">
                <Text className="font-semibold text-slate-800 text-lg">
                    Divide
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    el total
                </Text>
            </View>
            <View className="flex-1 w-full flex-row">
                <TouchableOpacity onPress={decrement} className="plus-btn w-auto bg-indigo-500 items-center justify-center rounded-l-xl px-4">
                    <Text className="text-white font-bold">
                        <AntDesign name="minus" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
                <View className="w-full flex-1 items-center justify-center">
                    <Text className="w-full h-auto py-3 flex text-center text-slate-700 bg-white font-bold text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
                        {splitNum}
                        {splitNum > 1 && (
                            <Text className="text-lg font-medium text-slate-500"> personas</Text>
                        )}
                        {splitNum === 1 && (
                            <Text className="text-lg font-medium text-slate-500"> persona</Text>
                        )}
                    </Text>
                </View>
                <TouchableOpacity onPress={increment} className="minus-btn bg-indigo-500 items-center justify-center rounded-r-xl px-4 h-auto">
                    <Text className="text-white font-bold">
                        <AntDesign name="plus" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplitTotal;