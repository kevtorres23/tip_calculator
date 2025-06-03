import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [username, setUsername] = useState("");

  const ShowAlert = () => {
    alert("Button pressed");
  }
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Text className='font-bold text-red-500'>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
