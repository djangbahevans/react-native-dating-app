import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../components/Card"
import IconButton from "../components/IconButton"

const MainScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", paddingHorizontal: 40 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <IconButton
          icon="chevron-left"
          style={{ width: 52, height: 52 }}
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "#e8e6ea" }}
          size={20}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Discover</Text>
          <Text style={{ fontSize: 12 }}>Kumasi</Text>
        </View>
        <IconButton
          icon="sliders"
          style={{ width: 52, height: 52 }}
          iconStyle={{ color: "#e94057" }}
          buttonStyle={{ borderWidth: 1, borderColor: "#e8e6ea" }}
          size={20}
        />
      </View>
      <Card
        occupation="Professional model"
        name="Mary Adjei"
        age={19}
        distance={15}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, alignContent: "center" }}>
        <IconButton
          icon="close"
          style={{ width: 78, height: 78, elevation: 20 }}
          buttonStyle={{ backgroundColor: "white", borderRadius: 39 }}
          iconStyle={{ fontSize: 30, color: "#f27121" }}
        />
        <IconButton
          icon="heart"
          style={{ width: 100, height: 100, elevation: 30, shadowColor: "#e94057" }}
          buttonStyle={{ backgroundColor: "#e94057", borderRadius: 50, }}
          iconStyle={{ fontSize: 50, color: "white" }}
        />
        <IconButton
          icon="star"
          style={{ width: 78, height: 78, elevation: 20 }}
          buttonStyle={{ backgroundColor: "white", width: 78, height: 78, borderRadius: 39 }}
          iconStyle={{ fontSize: 30, color: "#8a2387" }}
        />
      </View>
    </SafeAreaView>
  )
}

export default MainScreen
