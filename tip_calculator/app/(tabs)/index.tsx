import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import TotalCard from '@/components/TotalCard';
import InputBill from '@/components/InputBill';
import ChooseTip from '@/components/ChooseTip';
import SplitTotal from '@/components/SplitTotal';

type CountryInfo = {
  pais: string | undefined,
  minimo: number | undefined,
  maximo: number | undefined,
  comentario: string | undefined,
}

export default function HomeScreen() {
  const [totalBill, setTotalBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [indTotal, setIndTotal] = useState(0);

  // actualizar dinámicamente el total de la propina cada vez que totalBill o selectedTip cambia
  useEffect(() => {
    let tipApplied = Number((totalBill * (selectedTip / 100)).toFixed(3));
    setTotalTip(tipApplied);
  }, [totalBill, selectedTip])

  function changeTotalTip(tip: number) {
    setSelectedTip(tip);
  }

  function changeTotalBill(value: string) {
    setTotalBill(Number(value));
  }

  function changeIndTotal(people: number) {
    let total = Number(((totalBill + totalTip)/people).toFixed(2));
    setIndTotal(total);
  }

  return (
    <SafeAreaView style={styles.safe} className='bg-slate-100 items-center justify-start'>
      <View className="flex-1 items-center justify-center w-screen bg-slate-100 px-8 gap-8">

        <Text className='font-bold text-3xl text-center px-10 text-slate-700'>Calculadora de Propinas</Text>

        <TotalCard totalPerPerson={indTotal} totalBill={totalBill} totalTip={totalTip} />

        <InputBill amountChange={changeTotalBill} />

        <ChooseTip tipChange={changeTotalTip}/>

        <SplitTotal numberChange={changeIndTotal}/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
});
