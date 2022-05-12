import { FontAwesome as Icon } from "@expo/vector-icons"
import React from "react"
import { GestureResponderEvent, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

type Props = {
  buttonStyle?: StyleProp<ViewStyle>,
  iconStyle?: StyleProp<TextStyle>,
  icon: React.ComponentProps<typeof Icon>["name"],
  onPress?(event: GestureResponderEvent): void
  style?: StyleProp<ViewStyle>
  size?: number
}

const IconButton = ({ style, onPress, buttonStyle, iconStyle, icon, size = 28 }: Props) => {
  return (
    <TouchableOpacity
      style={[{ width: 64, height: 64, borderRadius: 15 }, style]}
      onPress={onPress} >
      <View style={[{ flex: 1, justifyContent: "center", borderRadius: 15 }, buttonStyle]}>
        <Icon
          name={icon}
          style={[{ textAlign: "center" }, iconStyle]}
          size={size} />
      </View>
    </TouchableOpacity >
  )
}

export default IconButton
