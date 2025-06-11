import { Platform, StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import TotalCard from '@/components/TotalCard';
import InputBill from '@/components/InputBill';
import ChooseTip from '@/components/ChooseTip';
import SplitTotal from '@/components/SplitTotal';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import SaveCalculation from '@/components/SaveCalculation';

export default function HomeScreen() {
  const [totalBill, setTotalBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [indTotal, setIndTotal] = useState(0);
  const [restName, setRestName] = useState("");
  const [isUsername, setIsUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // actualizar dinámicamente el total de la propina cada vez que totalBill o selectedTip cambia
  useEffect(() => {
    let tipApplied = Number((totalBill * (selectedTip / 100)).toFixed(3));
    setTotalTip(tipApplied);
  }, [totalBill, selectedTip])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }, []);

  const storeData = async (name: string) => {
    try {
      await AsyncStorage.setItem('username', name);
      onRefresh();
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        setIsUsername(true);
        setUsername(value);
      } else {
        setIsUsername(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem('username');
      onRefresh();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  });

  function saveUser() {
    if (username !== null) {
      let newUsername = username.trim();
      setUsername(newUsername);
      storeData(newUsername);
    }
  }

  function changeTotalTip(tip: number) {
    setSelectedTip(tip);
  }

  function changeTotalBill(value: string) {
    setTotalBill(Number(value));
  }

  function changeIndTotal(people: number) {
    let total = Number(((totalBill + totalTip) / people).toFixed(2));
    setIndTotal(total);
  }

  return (
    <SafeAreaView style={styles.safe} className='bg-slate-100 items-center justify-center'>
      <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View className="flex-1 items-center justify-center w-screen bg-slate-100 px-8 gap-8">

          {isUsername === true && (
            <View className='flex-row w-full items-center justify-between'>
              <Text className="text-xl text-slate-700 font-bold">¡Bienvenid@ de vuelta, {username}! 👋</Text>

              <TouchableOpacity onPressOut={removeUser} className="gap-2 w-auto px-3 py-2 bg-indigo-500 items-center justify-center rounded-xl">
                <Ionicons name="trash-outline" size={18} color="white" />
              </TouchableOpacity>
            </View>
          )}


          {isUsername === false && (
            <View className='gap-2'>
              <Text className="text-xl text-slate-700 font-bold">¡Bienvenido!</Text>
              <View className="flex flex-row w-full gap-3">

                <TextInput placeholder="Enter your name" value={username} onChangeText={setUsername} className="flex-1 text-base bg-white placeholder:text-slate-400 rounded-lg w-full px-4 py-3 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200">
                </TextInput>

                <TouchableOpacity onPressOut={saveUser} className="flex-1 flex-row gap-2 w-full py-3 px-4 bg-indigo-500 items-center justify-center rounded-xl">
                  <AntDesign name="check" size={16} color="white" />
                  <Text className="text-white font-bold text-base">Guardar nombre</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TotalCard totalPerPerson={indTotal} totalBill={totalBill} totalTip={totalTip} />

          <InputBill amountChange={changeTotalBill} />

          <ChooseTip tipChange={changeTotalTip} />

          <SplitTotal numberChange={changeIndTotal} />

          <SaveCalculation />

        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20,
    paddingBottom: 20,
  },

  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 20,
    width: "auto",
  }
});
