import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

type ChooseTipProps = {
    tipChange: (percentage: number) => void;
}

function ChooseTip(props: ChooseTipProps) {
    const [tip1, setTip1] = useState(10);
    const [tip2, setTip2] = useState(15);
    const [tip3, setTip3] = useState(20);
    const [tipOnePressed, setTipOnePressed] = useState(false);
    const [tipTwoPressed, setTipTwoPressed] = useState(false);
    const [tipThreePressed, setTipThreePressed] = useState(false);

    function tip1Pressed() {
        setTipOnePressed(true);
        setTipTwoPressed(false);
        setTipThreePressed(false);
        props.tipChange(tip1);
    }

    function tip2Pressed() {
        setTipOnePressed(false);
        setTipTwoPressed(true);
        setTipThreePressed(false);
        props.tipChange(tip2);
    }

    function tip3Pressed() {
        setTipOnePressed(false);
        setTipTwoPressed(false);
        setTipThreePressed(true);
        props.tipChange(tip3);
    }

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
                        <TouchableOpacity onPressOut={tip1Pressed} className={tipOnePressed ? "tip1 flex-1 h-auto w-full py-2 px-4 bg-indigo-200 border border-indigo-600 rounded-xl items-center" : "tip1 flex-1 h-auto w-full py-2 px-4 border border-indigo-600 bg-white rounded-xl items-center"}>
                            <Text className="text-indigo-600 font-medium text-lg">{tip1}%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPressOut={tip2Pressed} className={tipTwoPressed ? "tip1 flex-1 h-auto w-full py-2 px-4 bg-indigo-200 border border-indigo-600 rounded-xl items-center" : "tip1 flex-1 h-auto w-full py-2 px-4 border border-indigo-600 bg-white rounded-xl items-center"}>
                            <Text className="text-indigo-600 font-medium text-lg">{tip2}%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPressOut={tip3Pressed} className={tipThreePressed ? "tip1 flex-1 h-auto w-full py-2 px-4 bg-indigo-200 border border-indigo-600 rounded-xl items-center" : "tip1 flex-1 h-auto w-full py-2 px-4 border border-indigo-600 bg-white rounded-xl items-center"}>
                            <Text className="text-indigo-600 font-medium text-lg">{tip3}%</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity className="flex w-full h-auto py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                    <Text className="text-white font-bold">Custom Tip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChooseTip;