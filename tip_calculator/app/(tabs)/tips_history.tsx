import { Platform, StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TipsHistory() {
    const [isHistory, setIsHistory] = useState(false);
    const [savedTips, setSavedTips] = useState([]);

    useEffect(() => {
        if (savedTips.length === 0) {
            setIsHistory(false);
        } else {
            setIsHistory(true);
        }
    })

    return (
        <SafeAreaView style={styles.safe} className='bg-slate-100 flex items-center justify-center'>
            <ScrollView contentContainerStyle={styles.scrollView} className='flex'>
                <View className="flex-1 items-center justify-center w-screen px-8 gap-8">
                    {isHistory === false && (
                        <View className='items-center justify-center gap-4'>
                            <Text className='text-xl text-center font-medium text-slate-500'>Aún no has guardado un cálculo de propinas</Text>
                            <Ionicons name="wallet-outline" size={64} color="#94a3b8"/>
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

