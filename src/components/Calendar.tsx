import { addDays, addMonths, format, isSameDay, isSameMonth, isToday, startOfMonth, startOfWeek } from "date-fns"
import React, { ReactNode, useState } from "react"
import { Pressable, Text, View } from "react-native"
import Button from "./Button"

const NUM_OF_WEEKS = 6
const NUM_OF_DAYS_PER_WEEK = 7

type DayProps = {
  selected: boolean,
  active: boolean
  day: Date
  onPressed(): void
}

const Day = ({ selected = false, active = false, day, onPressed }: DayProps) => {
  const color = selected ? "#ffffff" : active ? "#000000" : "#e8e6ea"
  const backgroundColor = selected ? "#e94057" : isToday(day) ? "#e9405733" : "transparent"

  const handlePress = () => {
    if (active) onPressed?.()
  }

  return (
    <Pressable onPress={handlePress} style={{ flexBasis: "14.285714285714286%", alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: 30, height: 30, borderRadius: 43 / 2, justifyContent: "center", backgroundColor, alignItems: "center" }}>
        <Text style={{ fontSize: 14, color }}>{format(day, "d")}</Text>
      </View>
    </Pressable>
  )
}

type Props = {
  onDateChanged?(date: Date): void
  defaultDate?: Date
}

const Calendar = ({ defaultDate, onDateChanged: onDateSelected }: Props) => {
  const [date, setDate] = useState(defaultDate || new Date())
  const [selectedDate, setSelectedDate] = useState(defaultDate || new Date())

  const nextMonth = () => {
    setDate(addMonths(date, 1))
  }

  const renderRow = (firstDayOfFirstWeek: Date, week: number) => {
    const firstDay = addDays(firstDayOfFirstWeek, week * 7)
    const days: ReactNode[] = []

    const handlePress = (date: Date) => () => {
      setSelectedDate(date)
      onDateSelected?.(date)
    }

    for (let i = 0; i < NUM_OF_DAYS_PER_WEEK; i++) {
      const day = addDays(firstDay, i)
      days.push(
        <Day
          key={i}
          day={day}
          selected={isSameDay(day, selectedDate)}
          active={isSameMonth(day, date)}
          onPressed={handlePress(day)}
        />
      )
    }
    return days
  }

  const renderMonth = () => {
    const weeks: ReactNode[] = []
    const firstDayOfMonth = startOfMonth(date)
    const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth)
    for (let i = 0; i < NUM_OF_WEEKS; i++) {
      weeks.push(
        <View key={i} style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "stretch", flex: 1, width: "100%", marginTop: 17 }}>
          {renderRow(firstDayOfFirstWeek, i)}
        </View>
      )
    }

    return weeks
  }

  return (
    <View style={{ alignItems: "center", flex: 1, width: "100%" }}>
      <Text style={{ fontSize: 34, color: "#e94057" }}>{format(date, "yyyy")}</Text>
      <Text style={{ color: "#e94057", fontSize: 14 }}>{format(date, "MMMM")}</Text>
      <View style={{ flex: 1, }}>
        {renderMonth()}
      </View>
    </View>
  )
}

export default Calendar
