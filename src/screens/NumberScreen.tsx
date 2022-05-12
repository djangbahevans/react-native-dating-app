import React from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../components/Button"
import PhoneNumberInput from "../components/PhoneNumberInput"

const NumberScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", width: 295, alignSelf: "center" }}>
      <Text style={{ fontSize: 34, marginTop: 64, fontWeight: "bold", alignSelf: "flex-start" }}>My mobile</Text>
      <Text style={{ textAlign: "center", fontSize: 14 }}>Please enter your valid phone number. We will send you a 4-digit code to verify your account.</Text>
      <PhoneNumberInput style={{ marginTop: 32 }} />
      <Button
        style={{ marginTop: 64 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Continue" />
    </SafeAreaView>
  )
}


export default NumberScreen
