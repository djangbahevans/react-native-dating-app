import React from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../components/Button"
import IconButton from "../components/IconButton"
import RadioGroup from "../components/RadioGroup"

const GenderScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", alignSelf: "center", width: "100%", padding: 40 }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <IconButton
          icon="chevron-left"
          style={{ width: 52, height: 52 }}
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "#e8e6ea" }}
          size={20}
        />
        <View style={{ flexGrow: 1 }} />
        <Pressable>
          <Text style={{ color: "#e94057", fontSize: 16 }}>Skip</Text>
        </Pressable>
      </View>
      <Text
        style={{ fontSize: 34, marginTop: 64, fontWeight: "bold", alignSelf: "flex-start" }}>I am a</Text>
      <RadioGroup
        radioButtons={[
          { id: 1, value: "woman", label: "Woman" },
          { id: 2, value: "man", label: "Man" },
        ]}
        styles={{ marginTop: 90 }}
        onSelect={val => console.log(val)}
      />
      <Button
        style={{ marginTop: 245, marginBottom: 48 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Continue"
      />
    </SafeAreaView>
  )
}

export default GenderScreen
