import React from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Image, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from "react";
import countryTips from "../scripts/tips-data";

type CountryInfo = {
    pais: string | undefined,
    minimo: number | undefined,
    maximo: number | undefined,
    comentario: string | undefined,
}

type ChooseTipProps = {
    tipChange: (percentage: number) => void;
}

function ChooseTip(props: ChooseTipProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [countryModal, setCountryModal] = useState(false);
    const [tip1, setTip1] = useState("10");
    const [tip2, setTip2] = useState("15");
    const [tip3, setTip3] = useState("20");
    const [tipOnePressed, setTipOnePressed] = useState(false);
    const [tipTwoPressed, setTipTwoPressed] = useState(false);
    const [tipThreePressed, setTipThreePressed] = useState(false);
    const [selecCountry, setSelecCountry] = useState("");
    const [foundCountryInfo, setFoundCountryInfo] = useState<CountryInfo>({ pais: "", minimo: 0, maximo: 0, comentario: "" });

    useEffect(() => {
        if (selecCountry != "") {
            setCountryModal(!countryModal);
        };
        let infoCountry = countryTips.find(item => item.pais === selecCountry);
        setFoundCountryInfo({ pais: selecCountry, minimo: infoCountry?.minimo, maximo: infoCountry?.maximo, comentario: infoCountry?.comentario })
    }, [selecCountry]);

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
        <View className="w-full h-auto flex-row gap-4 items-center">
            <View className="w-20">
                <Text className="font-medium text-slate-800 text-lg">
                    Escoge
                </Text>
                <Text className="font-normal text-slate-800 text-lg">
                    tu propina
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

                <View className="flex-row w-full">
                    <View className="flex-1 flex-row justify-between gap-3 w-full">
                        <TouchableOpacity onPressOut={() => setModalVisible(!modalVisible)} className="flex-1 flex-row gap-2 w-full py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                            <AntDesign name="edit" size={16} color="white" />
                            <Text className="text-white font-bold text-base">Personalizar propinas</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-col w-full bg-white border-[1px] rounded-xl py-0 border-indigo-500">
                    <Picker
                        style={styles.picker}
                        selectedValue={selecCountry}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelecCountry(itemValue)
                        }>
                        <Picker.Item key={1} label="Selecciona un país..." value="" />
                        {countryTips.map((data, key) => (
                            <Picker.Item key={key} label={data.pais} value={data.pais} />
                        ))}
                    </Picker>
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
                    <View className="items-center justify-center w-full h-full px-10">
                        <View className="bg-white px-6 py-6 rounded-2xl border border-slate-300 gap-4 flex-col">
                            <Text className="font-medium text-lg text-slate-700 text-center">Cambia aquí los porcentajes de las propinas</Text>
                            <View className="flex flex-row gap-3">
                                <TextInput value={tip1} onChangeText={setTip1} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                                <TextInput value={tip2} onChangeText={setTip2} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                                <TextInput value={tip3} onChangeText={setTip3} className="flex-1 w-auto py-2 bg-slate-50 border border-slate-200 rounded-lg"></TextInput>
                            </View>
                            <TouchableOpacity className="bg-indigo-500 flex-row items-center gap-2 justify-center py-2 rounded-lg" onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name="check" size={18} color="white" />
                                <Text className="text-white font-medium">Guardar propinas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    className="propinas w-full h-full items-center justify-center"
                    animationType="slide"
                    transparent={false}
                    backdropColor={"transparent"}
                    visible={countryModal}
                    onRequestClose={() => {
                        setModalVisible(!countryModal);
                    }}>
                    <View className="items-center justify-center w-full h-full px-8">
                        <View className="bg-white px-6 py-6 rounded-2xl border border-slate-300 gap-4 flex-col">
                            <Text className="font-medium text-lg text-slate-700">
                                {foundCountryInfo.pais}: {foundCountryInfo.comentario}
                            </Text>

                            <TouchableOpacity className="bg-indigo-500 flex-row items-center gap-2 justify-center py-2 rounded-lg" onPress={() => setCountryModal(!countryModal)}>
                                <AntDesign name="close" size={18} color="white" />
                                <Text className="text-white font-medium">Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        color: "#615FFF",
        borderStyle: "solid",
        borderWidth: 1,
        height: "auto",
        borderColor: "#615FFF",
    },

    pickerItem: {
        color: "#615FFF",
        fontSize: 15,
    }
})

export default ChooseTip;