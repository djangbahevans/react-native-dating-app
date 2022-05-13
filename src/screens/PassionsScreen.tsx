import React, { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../components/Button"
import CheckableButton from "../components/CheckableButton"
import IconButton from "../components/IconButton"

const PASSIONS_LIST = [
  {
    title: "Photography",
    iconName: "camera",
    value: "photography"
  },
  {
    title: "Karaoke",
    iconName: "microphone",
    value: "karaoke"
  },
  {
    title: "Cooking",
    iconName: "cheese",
    value: "cooking"
  },
  {
    title: "Run",
    iconName: "running",
    value: "run"
  },
  {
    title: "Art",
    iconName: "paint-brush",
    value: "art"
  },
  {
    title: "Extreme",
    iconName: "parachute-box",
    value: "extreme"
  },
  {
    title: "Drink",
    iconName: "wine-glass-alt",
    value: "drink"
  },
  {
    title: "Shopping",
    iconName: "shopping-bag",
    value: "shopping"
  },
  {
    title: "Yoga",
    iconName: "burn",
    value: "yoga"
  },
  {
    title: "Tennis",
    iconName: "table-tennis",
    value: "tennis"
  },
  {
    title: "Swimming",
    iconName: "swimmer",
    value: "swimming"
  },
  {
    title: "Traveling",
    iconName: "plane",
    value: "traveling"
  },
  {
    title: "Music",
    iconName: "music",
    value: "music"
  },
  {
    title: "Video Games",
    iconName: "gamepad",
    value: "video games"
  },
]

const PassionsScreen = () => {
  const [passions, setPassions] = useState<string[]>([])

  const handleSelectPassion = (passion: string) => {
    const inPassions = passions.indexOf(passion) !== -1
    if (!inPassions) {
      if (!(passions.length >= 5))
        setPassions([...passions, passion])
    }
    else {
      setPassions(passions.filter(p => p !== passion))
    }
  }

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
        style={{ fontSize: 34, marginTop: 32, fontWeight: "bold", alignSelf: "flex-start" }}>Your interests</Text>
      <Text style={{ fontSize: 14 }}>
        Select a few of your interests and let everyone know what you&apos;re passionate about
      </Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 32, alignContent: "space-between" }}>
        {PASSIONS_LIST.map(passion => {

          return (
            <CheckableButton
              onPress={handleSelectPassion}
              style={{ flexBasis: "48%" }}
              key={passion.value}
              title={passion.title}
              value={passion.value}
              iconName={passion.iconName}
              selected={passions.indexOf(passion.value) !== -1}
            />
          )
        })}
      </View>
      <Button
        style={{ marginTop: 48 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Continue"
        onPress={() => console.log(passions)}
      />
    </SafeAreaView>
  )
}

export default PassionsScreen
