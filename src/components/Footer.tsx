import React from "react"
import { View, useWindowDimensions, GestureResponderEvent } from "react-native"
import RoundedButton from "./RoundedButton"

type Props = {
  backgroundColor: string
  rightButtonLabel?: string
  rightButtonPress?(event: GestureResponderEvent): void
  leftButtonLabel?: string
  leftButtonPress?(event: GestureResponderEvent): void
}

const Footer = ({
  backgroundColor,
  rightButtonLabel,
  rightButtonPress,
  leftButtonLabel,
  leftButtonPress
}: Props) => {
  const windowWidth = useWindowDimensions().width
  const HEIGHT = windowWidth * 0.21
  const FOOTER_PADDING = windowWidth * 0.1

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: leftButtonLabel ? "space-between" : "flex-end",
        height: HEIGHT,
        backgroundColor,
        opacity: 0.6,
        alignItems: "center",
        paddingHorizontal: FOOTER_PADDING
      }}
    >
      {leftButtonLabel && (
        <RoundedButton label={leftButtonLabel} onPress={e => leftButtonPress?.(e)} />
      )}
      {rightButtonLabel && (
        <RoundedButton label={rightButtonLabel} onPress={e => rightButtonPress?.(e)} />)}
    </View>
  )
}

export default Footer
