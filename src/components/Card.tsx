import React from "react"
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { Feather as Icon } from "@expo/vector-icons"

type Props = {
  name: string,
  age: number,
  distance: number,
  occupation: string
}

const Dot = ({ active = false, style }: { active?: boolean, style?: StyleProp<ViewStyle> }) => {
  return (
    <View style={[{ width: 4, height: 4, borderRadius: 2, backgroundColor: active ? "white" : "rgba(255, 255, 255, 0.5)" }, style]} />
  )
}

const Card = ({ name, age, distance, occupation }: Props) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../../statics/onboard1.jpeg")} />
      <View style={styles.distanceView}>
        <Icon name="map-pin" style={{ fontSize: 14, color: "white" }} />
        <Text style={{ fontSize: 12, marginLeft: 2, fontWeight: "bold", color: "white" }}>{distance} km</Text>
      </View>
      <View style={{ position: "absolute", bottom: 20, left: 16, right: 16 }}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>{name}, {age}</Text>
        <Text style={{ color: "white", fontSize: 14 }}>{occupation}</Text>
      </View>
      <View style={[StyleSheet.absoluteFill, { justifyContent: "center", alignItems: "flex-end" }]}>
        <View style={{ position: "absolute", paddingVertical: 16, paddingHorizontal: 8, backgroundColor: "rgba(255, 255, 255, 0.15)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
          <Dot
            style={{marginBottom: 8}}
            active />
          <Dot
            style={{ marginBottom: 8 }} />
          <Dot
            style={{ marginBottom: 8 }} />
          <Dot />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 450,
    borderRadius: 15,
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  distanceView: {
    backgroundColor: "#ffffff44",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7,
    top: 20,
    left: 20
  }
})

export default Card
