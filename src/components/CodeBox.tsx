import React from "react"
import { Text, View } from "react-native"

type Props = {
  status: "active" | "filled" | "inactive"
  value?: number
}

const CodeBox = ({ status, value = 0 }: Props) => {
  let backgroundColor = ""
  let borderColor = ""
  let color = ""
  if (status === "filled") {
    backgroundColor = "#e94057"
    borderColor = "#e94057"
    color = "white"
  }
  else if (status === "active") {
    backgroundColor = "transparent"
    borderColor = "#e94057"
    color = "#e94057"
  }
  else if (status === "inactive") {
    backgroundColor = "transparent"
    borderColor = "#e8e6ea"
    color ="#e8e6ea"
  }

  return (
    <View style={{ height: 70, width: 67, backgroundColor, borderColor, borderWidth: 1, borderRadius: 15, justifyContent: "center", alignContent: "center" }}>
      <Text style={{ fontSize: 34, color, textAlign: "center" }}>{value}</Text>
    </View>
  )
}

export default CodeBox
