import { FontAwesome as Icon } from "@expo/vector-icons"
import React, { useState } from "react"
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

type RadioButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  title: string,
  onPress?(value: string): void
  style?: StyleProp<ViewStyle>
  selected?: boolean
  value: string
}

const RadioButton = ({ style = {}, buttonStyle, textStyle, onPress, title, selected, value }: RadioButtonProps) => {
  const color = selected ? "white" : "black"
  const backgroundColor = selected ? "#e94057" : "transparent"
  return (
    <TouchableOpacity
      style={[{ width: "100%", height: 56, borderRadius: 15 }, style]}
      onPress={() => onPress?.(value)} >
      <View
        style={[
          buttonStyle,
          { flex: 1, justifyContent: "space-between", borderRadius: 15, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, backgroundColor, borderColor: "#e8e6ea", borderWidth: selected ? 0 : 1 }]}>
        <Text style={[textStyle, { fontSize: 16, textAlign: "center", color }]}>{title}</Text>
        <Icon name="check" style={[textStyle, { fontSize: 16, color: selected ? "white" : "#adafbb" }]} />
      </View>
    </TouchableOpacity >
  )
}

type Props = {
  radioButtons: { id: number, label: string, value: string }[],
  onSelect?(value: string): void
  styles?: StyleProp<ViewStyle>
}

const RadioGroup = ({ radioButtons = [], onSelect: onSelectChange, styles = {} }: Props) => {
  const [selected, setSelected] = useState(radioButtons[0].value)

  const handlePress = (value: string) => {
    if (value !== selected) {
      setSelected(value)
      onSelectChange?.(value)
    }
  }

  return (
    <View style={[styles, { width: "100%" }]}>
      {radioButtons.map((d, index) => {

        return (
          <RadioButton
            key={d.id}
            style={{ marginBottom: index === 0 ? 5 : 0 }}
            buttonStyle={{ backgroundColor: "#e94057" }}
            textStyle={{ color: "white" }}
            title={d.label}
            value={d.value}
            onPress={handlePress}
            selected={selected === d.value}
          />
        )
      })}
    </View>
  )
}

export default RadioGroup
