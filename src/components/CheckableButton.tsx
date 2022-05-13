import { FontAwesome5 as Icon } from "@expo/vector-icons"
import React, { ComponentProps } from "react"
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"


type RadioButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  title: string,
  onPress?(value: string): void
  style?: StyleProp<ViewStyle>
  selected?: boolean
  value: string
  iconName: ComponentProps<typeof Icon>["name"]
}

const CheckableButton = ({ style = {}, buttonStyle, textStyle, onPress, title, selected, value, iconName }: RadioButtonProps) => {
  const color = selected ? "white" : "black"
  const backgroundColor = selected ? "#e94057" : "transparent"

  return (
    <TouchableOpacity
      style={[{ width: "100%", height: 45, borderRadius: 15 }, style]}
      onPress={() => onPress?.(value)} >
      <View
        style={[
          buttonStyle,
          { flex: 1, justifyContent: "flex-start", borderRadius: 15, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, backgroundColor, borderColor: "#e8e6ea", borderWidth: selected ? 0 : 1 }]}>
        <Icon name={iconName} style={[textStyle, { fontSize: 14, color: selected ? "white" : "#e94057", marginRight: 8 }]} />
        <Text style={[textStyle, { fontSize: 14, textAlign: "center", color }]}>{title}</Text>
      </View>
    </TouchableOpacity >
  )
}

export default CheckableButton
