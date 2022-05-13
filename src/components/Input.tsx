import React from "react"
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native"

type Props = {
  label?: string
  placeholder?: string
  style?: StyleProp<ViewStyle>,
  value?: string
  onChangeText?(text: string): void
}

const Input = ({ label, placeholder, style,  onChangeText }: Props) => {
  return (
    <View style={[{ width: "100%", borderWidth: 1, borderColor: "#e8e6ea", borderRadius: 15, height: 58, justifyContent: "center" }, style]}>
      <View style={{ position: "absolute", top: -9, left: 25, backgroundColor: "white", paddingHorizontal: 10 }}>
        <Text style={{ color: "#e8e6ea", fontSize: 12 }}>
          {label}
        </Text>
      </View>
      <TextInput
        // value={value}
        onChangeText={text => onChangeText?.(text)}
        style={{ marginHorizontal: 20, fontSize: 14 }}
        placeholder={placeholder} />
    </View>
  )
}

export default Input
