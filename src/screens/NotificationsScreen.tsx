import React from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LottieView from "lottie-react-native"
import Button from "../components/Button"

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", alignSelf: "center", width: "100%", padding: 40 }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexGrow: 1 }} />
        <Pressable>
          <Text style={{ color: "#e94057", fontSize: 16 }}>Skip</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 88 }}>
        <LottieView
          autoPlay
          style={{
            width: 240,
            height: 240,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../statics/91137-notification.json")}
        />
      </View>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 64 }}>Enable Notifictions</Text>
      <Text style={{ textAlign: "center", fontSize: 14, marginTop: 10 }}>Get push notifications when you get a match or receive a message.</Text>
      <Button
        style={{ marginTop: 120 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="I want to be notified"
      />
    </SafeAreaView>
  )
}

export default NotificationsScreen
