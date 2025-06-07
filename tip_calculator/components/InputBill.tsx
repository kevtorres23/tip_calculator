import React from "react";
import { View, Text, TextInput } from 'react-native';
import { useState, useEffect } from "react";

type InputBillProps = {
    amountChange: (value: string) => void;
}

function InputBill(props: InputBillProps) {
    const [billValue, setBillValue] = useState("0");

    useEffect(() => {
        props.amountChange(billValue);
    })

    return (
        <View className="w-full h-auto flex-row gap-4 items-center">
            <View className="w-20">
                <Text className="font-medium text-slate-800 text-lg">
                    Ingresa
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    tu cuenta
                </Text>
            </View>
            <TextInput value={billValue} onChangeText={setBillValue} placeholder="$000" keyboardType="numeric" className="flex-1 text-lg bg-white placeholder:text-slate-400 rounded-lg w-full px-4 py-3 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
            </TextInput>
        </View>
    )
}

export default InputBill;