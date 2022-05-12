import React from "react"
import { Image, ImageSourcePropType, Text, View } from "react-native"
import Button from "./Button"

type Props = {
  title: string
  text: string
  image: ImageSourcePropType,
  page: number
  total: number
}

const OnboardingPage = ({ image, title, text, page, total }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 32,
        alignItems: "center",
      }}
    >
      <Image source={image} style={{ height: 360, width: 235, borderRadius: 15 }} />
      <View style={{ marginTop: 44 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#e94057", textAlign: "center" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, color: "#323755", textAlign: "center", width: 295, marginTop: 10 }}>{text}</Text>
      </View>
      <View style={{ flexDirection: "row", width: 40, justifyContent: "space-between", marginTop: 30, marginBottom: 42 }}>
        {(() => {
          const views = []
          for (let i = 0; i < total; i++)
            views.push(<View key={i} style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: i === page ? "#e94057" : "#000000" }} />)
          return views
        })()}
      </View>
      <Button
        title="Create an account"
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        style={{ alignSelf: "center" }}
        onPress={() => {console.log("Create account")}} />
      <Text style={{ alignSelf: "center", marginTop: 20 }}>
        Already have an account?{" "}
        <Text
          style={{ color: "#e94057" }}
          onPress={() => {console.log("Sign in")}}
        >
          Sign In</Text>
      </Text>
    </View>
  )
}

export default OnboardingPage
