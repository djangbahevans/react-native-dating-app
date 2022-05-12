import React from "react"
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

type Props = {
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  title: string,
  onPress?(event: GestureResponderEvent): void
  style?: StyleProp<ViewStyle>
}

const Button = ({ style = {}, buttonStyle, textStyle, onPress, title }: Props) => {
  return (
    <TouchableOpacity
      style={[style, { width: 295, height: 56, borderRadius: 15 }]}
      onPress={onPress} >
      <View style={[buttonStyle, { flex: 1, justifyContent: "center", borderRadius: 15 }]}>
        <Text style={[textStyle, { fontSize: 16, textAlign: "center" }]}>{title}</Text>
      </View>
    </TouchableOpacity >
  )
}

export default Button
