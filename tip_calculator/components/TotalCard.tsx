import React from "react";
import { View, Text } from 'react-native';

type TotalCardProps = {
    totalPerPerson: number,
    totalBill: number,
    totalTip: number,
}

function TotalCard(props: TotalCardProps) {
    return (
        <View className="bg-white w-full items-center justify-center py-6 gap-4 px-6 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-300">
            <View className="total-p-person text-center items-center box-content gap-2">
                <Text className="font-medium text-lg text-slate-600">Total per person:</Text>
                <Text className="font-bold text-6xl text-slate-700 text-center">${props.totalPerPerson}</Text>
            </View>
            <View className="divisory-line w-full h-[1px] bg-slate-300"></View>
            <View className="lower-totals flex-row w-full justify-between">
                <View className="flex-col items-center justify-center w-auto">
                    <Text className="font-medium text-base text-slate-600">Total bill:</Text>
                    <Text className="font-bold text-3xl text-indigo-500">${props.totalBill}</Text>
                </View>
                <View className="flex-col items-center justify-center w-auto">
                    <Text className="font-medium text-base text-slate-600">Total tip:</Text>
                    <Text className="font-bold text-3xl text-indigo-500">${props.totalTip}</Text>
                </View>
            </View>
        </View>
    )
}

export default TotalCard;