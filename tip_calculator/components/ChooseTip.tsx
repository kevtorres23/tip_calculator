import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";

function ChooseTip() {
    const [tip1, setTip1] = useState(10);
    const [tip2, setTip2] = useState(15);
    const [tip3, setTip3] = useState(20);
    const [isSelected, setIsSelected] = useState(false);

    return (
        <View className="w-full h-auto flex-row gap-8 items-center">
            <View>
                <Text className="font-medium text-slate-800 text-lg">
                    Choose
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    your tip
                </Text>
            </View>
            <View className="flex-1 flex-col gap-3 h-auto">
                <View className="flex-row gap-5 placeholder:text-slate-400 rounded-lg w-full">
                    <View className="flex-1 flex-row justify-between gap-5">
                        <View className="tip1 flex-1 h-auto w-full py-2 px-4 bg-blue-50 border border-blue-500 rounded-xl items-center">
                            <Text className="text-blue-600 font-medium text-lg">{tip1}%</Text>
                        </View>
                        <View className="tip1 flex-1 h-auto w-full py-2 px-4 bg-blue-50 border border-blue-500 rounded-xl items-center">
                            <Text className="text-blue-600 font-medium text-lg">{tip2}%</Text>
                        </View>
                        <View className="tip1 flex-1 h-auto w-full py-2 px-4 bg-blue-50 border border-blue-500 rounded-xl items-center">
                            <Text className="text-blue-600 font-medium text-lg">{tip3}%</Text>
                        </View>
                    </View>
                </View>
                <View className="flex w-full h-auto py-3 px-4 bg-blue-500 items-center justify-center rounded-xl">
                    <Text className="text-white font-bold">Custom Tip</Text>
                </View>
            </View>
        </View>
    )
}

export default ChooseTip;