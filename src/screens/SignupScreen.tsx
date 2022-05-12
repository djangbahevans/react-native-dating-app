import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather as Icon } from "@expo/vector-icons"
import { Text, View } from "react-native"
import Button from "../components/Button"
import IconButton from "../components/IconButton"

const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Icon name="activity" size={172} style={{ color: "#e94057", marginTop: 64 }} />
      <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 78, marginBottom: 32 }}>Sign up to continue</Text>
      <Button
        title="Continue with email"
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        style={{ alignSelf: "center" }}
        onPress={() => { console.log("use email") }} />
      <View style={{ marginTop: 20 }} />
      <Button
        title="Use phone number"
        buttonStyle={{ backgroundColor: "transparent", borderColor: "#f3f3f3", borderWidth: 1 }}
        textStyle={{ color: "#e94057" }}
        style={{ alignSelf: "center" }}
        onPress={() => { console.log("use number") }} />
      <View style={{ marginTop: 32, flexDirection: "row", width: 295, alignItems: "center" }}>
        <View style={{ borderColor: "rgba(0, 0, 0, 0.4)", borderBottomWidth: 1, flex: 1, marginRight: 14, height: 0 }} />
        <Text>or sign up with</Text>
        <View style={{ borderColor: "rgba(0, 0, 0, 0.4)", borderBottomWidth: 1, flex: 1, marginLeft: 14, height: 0 }} />
      </View>
      <View style={{ marginTop: 24, flexDirection: "row", width: 232, justifyContent: "space-between" }}>
        <IconButton
          icon="facebook-official"
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "rgba(0, 0, 0, 0.4)" }}
        />
        <IconButton
          icon="google"
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "rgba(0, 0, 0, 0.4)" }}
        />
        <IconButton
          icon="apple"
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "rgba(0, 0, 0, 0.4)" }}
        />
      </View>
      <View style={{ flexDirection: "row", width: 195, justifyContent: "space-between", marginTop: 32 }}>
        <Text onPress={() => {console.log("terms of use")}} style={{ color: "#e94057" }}>Terms of use</Text>
        <Text onPress={() => console.log("privacy policy")} style={{ color: "#e94057" }}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen
