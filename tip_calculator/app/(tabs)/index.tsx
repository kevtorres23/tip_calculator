import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { verifyInstallation } from 'nativewind';

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  verifyInstallation();

  return (
    <SafeAreaView style={styles.safe}>
      <View className='flex-1 items-center justify-center'>
        <Text className="text-red-500">Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
