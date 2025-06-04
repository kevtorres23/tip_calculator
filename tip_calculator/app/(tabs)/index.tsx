import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { verifyInstallation } from 'nativewind';
import TotalCard from '@/components/TotalCard';
import InputBill from '@/components/InputBill';
import ChooseTip from '@/components/ChooseTip';
import SplitTotal from '@/components/SplitTotal';

export default function HomeScreen() {
  verifyInstallation();

  return (
    <SafeAreaView style={styles.safe} className='bg-slate-100 items-center justify-start'>
      <View className="flex-1 items-center justify-center w-screen bg-slate-100 px-8 gap-10">

        <TotalCard totalPerPerson={0} totalBill={0} totalTip={0}/>

        <InputBill/>

        <ChooseTip/>

        <SplitTotal/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 20,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
});
