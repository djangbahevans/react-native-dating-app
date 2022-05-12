import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, TouchableOpacity, View } from "react-native"
import NumberKeyboard from "../components/NumberKeyboard"
import CodeBox from "../components/CodeBox"
import { intervalToDuration } from "date-fns"
import IconButton from "../components/IconButton"

const COUNTER_TIME_S = 120

const CodeScreen = () => {
  const [code, setCode] = useState("")
  const [timeLeft, setTimeLeft] = useState(COUNTER_TIME_S)
  const intervalRef = useRef<NodeJS.Timer>()

  const startCountDown = () => {
    intervalRef.current = setInterval(() => { setTimeLeft(t => t - 1) }, 1000)
  }

  useEffect(() => {
    if (!intervalRef.current)
      startCountDown()

    return () => {
      if (intervalRef.current)
        clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (timeLeft <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }, [timeLeft])

  const handleKeyPress = (key: number) => {
    if (code.length < 4)
      setCode(code + key.toString())
  }

  const handleDelete = () => {
    setCode(code.slice(0, code.length - 1))
  }

  const duration = intervalToDuration({ start: 0, end: timeLeft * 1000 })
  const secs = duration["seconds"] ?? 0
  const minutes = duration["minutes"] ?? 0

  const padWithZeros = (n: number) => {
    if (n <= 9) return "0" + n
    return n.toString()
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", width: 295, alignSelf: "center" }}>
      <IconButton
        icon="chevron-left"
        style={{ alignSelf: "flex-start", width: 52, height: 52 }}
        iconStyle={{ color: "#e94057" }}
        buttonStyle={{ borderWidth: 1, borderColor: "#e8e6ea" }}
        size={20}
      />
      <Text style={{ fontSize: 34, marginTop: 64, fontWeight: "bold" }}>{padWithZeros(minutes)}:{padWithZeros(secs)}</Text>
      <Text style={{ textAlign: "center", fontSize: 18, marginTop: 8 }}>Type the verification code we&apos;ve sent you</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: 300, marginTop: 48 }}>
        {(() => {
          const vals = []
          const count = code.length
          for (let i = 0; i < 4; i++) {
            let status: "inactive" | "active" | "filled" = "inactive"

            if (count === i) status = "active"
            else if (count > i) status = "filled"
            else status = "inactive"

            vals.push(<CodeBox key={i} value={status === "filled" ? parseInt(code[i]) : 0} status={status} />)
          }
          return vals
        })()}
      </View>
      <NumberKeyboard onKeyPress={handleKeyPress} onDelete={handleDelete} style={{ marginTop: 64 }} />
      <TouchableOpacity
        style={{ marginTop: 53, marginBottom: 64 }}
        onPress={() => {
          setTimeLeft(COUNTER_TIME_S)
          startCountDown()
        }}
        disabled={timeLeft > 0}>
        <Text style={{ color: timeLeft > 0 ? "#e8e6ea" : "#e94057", fontSize: 16 }}>Send again</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CodeScreen
