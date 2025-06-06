import React from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import countryTips from "../scripts/tips-data";

type ChooseTipProps = {
    tipChange: (percentage: number) => void;
}

function ChooseTip(props: ChooseTipProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [tip1, setTip1] = useState("10");
    const [tip2, setTip2] = useState("15");
    const [tip3, setTip3] = useState("20");
    const [tipOnePressed, setTipOnePressed] = useState(false);
    const [tipTwoPressed, setTipTwoPressed] = useState(false);
    const [tipThreePressed, setTipThreePressed] = useState(false);

    function tip1Pressed() {
        setTipOnePressed(true);
        setTipTwoPressed(false);
        setTipThreePressed(false);
        props.tipChange(Number(tip1));
    }

    function tip2Pressed() {
        setTipOnePressed(false);
        setTipTwoPressed(true);
        setTipThreePressed(false);
        props.tipChange(Number(tip2));
    }

    function tip3Pressed() {
        setTipOnePressed(false);
        setTipTwoPressed(false);
        setTipThreePressed(true);
        props.tipChange(Number(tip3));
    }

    return (
        <View className="w-full h-auto flex-row gap-6 items-center">
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
                    <View className="flex-1 flex-row justify-between gap-3">
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

                <View className="flex-row gap-5 placeholder:text-slate-400 rounded-lg w-full">
                    <View className="flex-1 flex-row justify-between gap-3 w-full">
                        <TouchableOpacity onPressOut={() => setModalVisible(!modalVisible)} className="flex-1 flex-row gap-2 w-full py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                            <AntDesign name="edit" size={16} color="white" />
                            <Text className="text-white font-bold text-base">Custom tips</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPressOut={() => setModalVisible(!modalVisible)} className="flex-1 flex-row gap-2 w-full py-3 px-4 bg-white-500 items-center border border-indigo-500 justify-center rounded-xl">
                            <AntDesign name="infocirlceo" size={16} color={"#615fff"}/>
                            <Text className="text-indigo-500 font-bold text-base">Country tips</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    className="modal w-full h-full items-center justify-center"
                    animationType="slide"
                    transparent={false}
                    backdropColor={"transparent"}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View className="items-center justify-center w-full h-full">
                        <View className="bg-white px-6 py-6 rounded-2xl border border-slate-300 gap-4 flex-col">
                            <Text className="font-medium text-lg text-slate-700">Change here the tip percentages</Text>
                            <View className="flex flex-row gap-3">
                                <TextInput value={tip1} onChangeText={setTip1} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                                <TextInput value={tip2} onChangeText={setTip2} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                                <TextInput value={tip3} onChangeText={setTip3} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                            </View>
                            <TouchableOpacity className="bg-indigo-500 flex-row items-center gap-2 justify-center py-2 rounded-lg" onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name="check" size={18} color="white" />
                                <Text className="text-white font-medium">Save tips</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ChooseTip;