import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ProfileDetailScreen from "./src/screens/ProfileDetailsScreen"

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ProfileDetailScreen />
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
