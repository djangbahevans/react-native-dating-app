import React from "react"
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"

const numberKeys = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

type Prop = {
  style?: StyleProp<ViewStyle>
  onKeyPress?(number: number): void
  onDelete?(): void
}

const NumberKeyboard = ({ style, onKeyPress, onDelete }: Prop) => {
  const renderKeys = (key: number, idx: number) => {
    return (
      <Pressable style={{ flex: 1, alignSelf: "center" }} key={idx} onPress={() => onKeyPress?.(key)}>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 24 }}>{key}</Text>
        </View>
      </Pressable>
    )
  }
  const renderNumberKeys = () => {
    return numberKeys.map((group, index) => {
      return (
        <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          {group.map(renderKeys)}
        </View>
      )
    })
  }

  return (
    <View style={[style, { flex: 1, alignSelf: "stretch" }]}>
      {renderNumberKeys()}
      <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
        <Pressable style={{ flex: 1, alignSelf: "center" }} onPress={() => null}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 24 }}></Text>
          </View>
        </Pressable>
        <Pressable style={{ flex: 1, alignSelf: "center" }} onPress={() => onKeyPress?.(0)}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 24 }}>{0}</Text>
          </View>
        </Pressable>
        <Pressable style={{ flex: 1, alignSelf: "center" }} onPress={() => onDelete?.()}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 24 }}>DEL</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default NumberKeyboard
