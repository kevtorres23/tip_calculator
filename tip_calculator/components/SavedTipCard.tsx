import React from "react";
import { View, Text } from "react-native";

type savedTipProps = {
    restName: string,
    tipPercentage: number,
    people: number,
    totalAmount: number,
}

function SavedTipCard(props: savedTipProps) {

    return (
        <View className="flex w-full bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-300 gap-0.5">
            <View className="upper-line w-full py-1 bg-indigo-500 rounded-t-xl"></View>
            <View className="py-4 px-5">
                <Text className="text-xl text-slate-800 font-bold">Restaurante "{props.restName}"</Text>
                <Text className="font-medium text-slate-500 text-lg">{"\u2022"} Porcentaje de propinas: <Text className="text-slate-800 font-medium">{props.tipPercentage}%</Text></Text>
                <Text className="font-medium text-slate-500 text-lg">{"\u2022"} Personas: <Text className="text-slate-800 font-medium">{props.people}</Text></Text>
                <Text className="font-medium text-slate-500 text-lg">{"\u2022"} Total por persona: <Text className="text-slate-800 font-medium">{props.totalAmount}</Text></Text>
            </View>
        </View>
    )
}

export default SavedTipCard;