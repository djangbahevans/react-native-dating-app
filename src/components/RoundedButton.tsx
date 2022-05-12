import React from "react"
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native"

type Props = {
  label: string
  onPress(event: GestureResponderEvent): void
}

const RoundedButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
