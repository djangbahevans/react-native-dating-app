import React from "react"
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { FontAwesome as Icon } from "@expo/vector-icons"

type Props = {
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  title: string,
  onPress?(event: GestureResponderEvent): void
  style?: StyleProp<ViewStyle>
}

const IconTextButton = ({ style = {}, buttonStyle, textStyle, onPress, title }: Props) => {
  return (
    <TouchableOpacity
      style={[{ width: "100%", height: 56, borderRadius: 15 }, style]}
      onPress={onPress} >
      <View style={[{ flex: 1, borderRadius: 15, flexDirection: "row", alignItems: "center" }, buttonStyle]}>
        <Icon
          name="calendar"
          style={[{ fontSize: 20, marginHorizontal: 20 }, textStyle]} />
        <Text style={[{ fontSize: 16 }, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity >
  )
}

export default IconTextButton
