import { FontAwesome as Icon } from "@expo/vector-icons"
import React from "react"
import { Image, ImageStyle, StyleProp, Text, View, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../components/Button"

type MatchCardProps = {
  heartPosition: "top-left" | "bottom-left",
  style?: StyleProp<ViewStyle>
}

const MatchCard = ({ heartPosition, style = {} }: MatchCardProps) => {
  const positionStyle: StyleProp<ImageStyle> = {}
  if (heartPosition === "bottom-left") {
    positionStyle.left = -30
    positionStyle.bottom = -30
  } else if (heartPosition === "top-left") {
    positionStyle.top = -30
    positionStyle.left = -30
  }

  return (
    <View style={[{ width: 160, height: 240 }, style]}>
      <Image
        style={{ width: "100%", height: "100%", position: "absolute", borderRadius: 15 }}
        source={require("../../statics/onboard1.jpeg")} />
      <View
        style={[{ width: 60, height: 60, borderRadius: 30, backgroundColor: "white", position: "absolute", justifyContent: "center", alignItems: "center", elevation: 20 }, positionStyle]}>
        <Icon name="heart" style={{ fontSize: 30, color: "#e94057" }} />
      </View>
    </View>
  )
}

const MatchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", paddingHorizontal: 40, alignItems: "center" }}>
      <View style={{ height: 400, marginTop: 10, alignSelf: "stretch" }}>
        <MatchCard
          style={{ position: "absolute", transform: [{ rotateZ: "10deg" }], right: 10, top: 37 }}
          heartPosition="top-left" />
        <MatchCard
          style={{ position: "absolute", transform: [{ rotateZ: "-10deg" }], left: 10, bottom: 30 }}
          heartPosition="bottom-left" />
      </View>
      <Text style={{ color: "#e94057", fontSize: 34, fontWeight: "bold", marginTop: 20 }}>
        It&apos;s a match, Evans!
      </Text>
      <Text style={{alignSelf: "center"}}>
        Start a conversation now with each other
      </Text>
      <Button
        style={{ marginTop: 83 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Say hello"
      />
      <Button
        style={{ marginTop: 10, marginBottom: 48 }}
        buttonStyle={{ backgroundColor: "rgba(233, 64, 87, 0.1)" }}
        textStyle={{ color: "#e94057" }}
        title="Keep swiping"
      />
    </SafeAreaView >
  )
}

export default MatchScreen
