import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import PassionsScreen from "./src/screens/PassionsScreen"

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <PassionsScreen />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
