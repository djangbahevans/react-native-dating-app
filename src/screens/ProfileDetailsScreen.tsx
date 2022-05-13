import React, { forwardRef, useState } from "react"
import { Pressable, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../components/Button"
import DatePicker from "../components/DatePicker"
import IconTextButton from "../components/IcontTextButton"
import ImageSelector from "../components/ImageSelector"
import Input from "../components/Input"
import Popup from "../components/Popup"

const ProfileDetailScreen = () => {
  const [modalOpen, setModalOpen] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthday, setBirthday] = useState<Date | null>(null)

  const onSubmit = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(birthday)
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", alignSelf: "center", width: "100%", padding: 40 }}>
      <Pressable style={{ alignSelf: "flex-end" }}>
        <Text style={{ color: "#e94057", fontSize: 16 }}>Skip</Text>
      </Pressable>
      <Text
        style={{ fontSize: 34, marginTop: 64, fontWeight: "bold", alignSelf: "flex-start" }}>Profile details</Text>
      <ImageSelector
        style={{ marginTop: 90 }}
      />
      <Input
        style={{ marginTop: 37 }}
        placeholder="First name"
        label="First name"
        onChangeText={setFirstName}
      />
      <Input
        style={{ marginTop: 10 }}
        placeholder="Last name"
        label="Last name"
        onChangeText={setLastName}
      />
      <IconTextButton
        title="Choose birthday date"
        style={{ marginTop: 10 }}
        buttonStyle={{ backgroundColor: "rgba(233, 64, 87, 0.1)" }}
        textStyle={{ color: "#e94057" }}
        onPress={() => setModalOpen(true)}
      />
      <Button
        style={{ marginTop: 64 }}
        buttonStyle={{ backgroundColor: "#e94057" }}
        textStyle={{ color: "white" }}
        title="Confirm"
        onPress={onSubmit}
      />
      <Popup
        open={modalOpen}
        height={516}
        openDuration={250}
        onClose={() => setModalOpen(false)}
        containerStyles={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DatePicker
          title="Birthday"
          onConfirmed={d => {
            setBirthday(d)
            setModalOpen(false)
          }}
        />
      </Popup>
    </SafeAreaView>
  )
}

export default forwardRef(ProfileDetailScreen)
