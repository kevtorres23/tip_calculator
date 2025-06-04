import React from "react";
import { View, Text, TextInput } from 'react-native';

function InputBill() {
    return (
        <View className="w-full h-auto flex-row gap-8 items-center">
            <View>
                <Text className="font-medium text-slate-800 text-lg">
                    Enter
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    your bill
                </Text>
            </View>
            <TextInput placeholder="$000" keyboardType="numeric" className="flex-1 text-lg bg-white placeholder:text-slate-400 rounded-lg w-full px-4 py-3 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
            </TextInput>
        </View>
    )
}

export default InputBill;