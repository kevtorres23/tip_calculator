import { Platform, StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import SavedTipCard from '@/components/SavedTipCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type calcObject = {
    restaurant: string,
    tipPercentage: number,
    people: number,
    totalAmount: number,
}

export default function TipsHistory() {
    const [tipsList, setTipsList] = useState<calcObject[]>([]);
    const [refreshing, setRefreshing] = useState(false);


    const getTips = async () => {
        try {
            const list = await AsyncStorage.getItem('savedCalculations');
            if (list != null) {
                const parsedList = JSON.parse(list);
                setTipsList(parsedList);
            }
        } catch (e) {
            console.log("Error");
        }
    }

    const removeTips = async () => {
        try {
            await AsyncStorage.removeItem('savedCalculations');
            onRefresh();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getTips();
    });

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 500)
    }, []);

    return (
        <SafeAreaView style={styles.safe} className='bg-slate-100 flex items-center justify-center'>
            <ScrollView contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} className='flex'>
                <View className="flex-1 items-start justify-start w-screen px-8 gap-8">
                    {tipsList.length === 0 && (
                        <View className='items-center justify-center gap-4'>
                            <Text className='text-xl px-10 text-center font-medium text-slate-500'>Aún no has guardado un cálculo de propinas</Text>
                            <Ionicons name="wallet-outline" size={64} color="#94a3b8" />
                        </View>
                    )}

                    {tipsList.length != 0 && (
                        <View className='w-full gap-4'>
                            <View>
                                <Text className='text-2xl font-bold text-slate-800'>Historial de propinas</Text>
                                <Text className='text-lg text-slate-500 font-medium'>Propinas guardadas: {tipsList.length}</Text>
                            </View>
                            <View className='flex flex-col w-full gap-4'>
                                {tipsList.map((list, index) => {
                                    return (
                                        <SavedTipCard restName={list.restaurant} tipPercentage={list.tipPercentage} people={list.people} totalAmount={list.totalAmount} />
                                    )
                                })}
                            </View>
                            <TouchableOpacity onPressOut={removeTips} className='w-full flex-row gap-1 bg-indigo-500 py-3 items-center justify-center rounded-xl'>
                                <Ionicons name="refresh-outline" size={20} color="white" />
                                <Text className='text-white text-lg font-medium'>Limpiar historial</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 0 : 20,
        paddingBottom: 20,
    },

    scrollView: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 20,
        width: "auto",
    }
});

