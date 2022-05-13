import React, { useState } from "react"
import Calendar from "./Calendar"
import { Text, View } from "react-native"
import Button from "./Button"

type Props = {
  onConfirmed?(date: Date): void
  title: string
  onDateChanged?(date: Date): void
  defaultDate?: Date
}

const DatePicker = ({ title, onDateChanged, onConfirmed, defaultDate }: Props) => {
  const [date, setDate] = useState(defaultDate || new Date())

  const handleDateChanged = (d: Date) => {
    setDate(d)
    onDateChanged?.(d)
  }

  return (
    <View style={{ width: 295, flex: 1 }}>
      <Text style={{ fontSize: 14, textAlign: "center", marginTop: 56 }}>{title}</Text>
      <Calendar
        defaultDate={date}
        onDateChanged={handleDateChanged}
      />
      <Button
        style={{ marginTop: 40, marginBottom: 48 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Save"
        onPress={() => onConfirmed?.(date)}
      />
    </View>
  )
}

export default DatePicker
