import parsePhoneNumber, { CountryCode as libCountryCode } from "libphonenumber-js"
import React, { useState } from "react"
import { useAsync } from "react-async-hook"
import { Image, Pressable, StyleProp, Text, TextInput, View, ViewStyle } from "react-native"
import CountryPicker, { Country, CountryCode, getCallingCode } from "react-native-country-picker-modal"
import { FontAwesome as Icon } from "@expo/vector-icons"

type Props = {
  style?: StyleProp<ViewStyle>
}

const PhoneNumberInput = ({ style = {} }: Props) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("GH")
  const [phoneNumber, setPhoneNumber] = useState("")

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
  }

  let callingCode = "233"
  const parsedNumber = (() => {
    if (countryCode)
      return parsePhoneNumber(phoneNumber, countryCode as libCountryCode)?.formatNational()
    return phoneNumber
  })()


  return (
    <View
      style={[
        { width: "100%", flexDirection: "row", borderColor: "#e8e6ea", borderWidth: 1, alignItems: "center", paddingVertical: 15, borderRadius: 15 }, style]}>
      <CountryPicker
        countryCode={countryCode}
        onSelect={onSelect}
        withAlphaFilter
        withCallingCode
        withCallingCodeButton
        renderFlagButton={p => {
          const asyncResult = useAsync(async () => {
            if (p.countryCode) {
              return await getCallingCode(p.countryCode)
            } else {
              return "+233"
            }
          }, [p.countryCode])

          if (asyncResult.result) callingCode = asyncResult.result

          return (
            <Pressable onPress={() => p.onOpen?.()}>
              <View
                style={{ flexDirection: "row", marginLeft: 20, alignItems: "center" }}>
                <Image
                  source={{ uri: `https://countryflagsapi.com/png/${p.countryCode}` }}
                  style={{ width: 20, height: 12, marginRight: 5 }} />
                <Text
                  style={{ fontSize: 14 }}>
                  (+{callingCode})
                </Text>
                <Icon
                  style={{ color: "#e8e6ea", marginLeft: 2 }}
                  size={12}
                  name="chevron-down" />
              </View>
            </Pressable>
          )
        }}
      />
      <View
        style={{ borderEndWidth: 2, height: 15, borderColor: "#e8e6ea", marginRight: 20, marginLeft: 10 }} />
      <TextInput
        keyboardType="phone-pad"
        style={{ fontSize: 14, flex: 1, marginRight: 20 }}
        value={parsedNumber}
        onChangeText={setPhoneNumber}></TextInput>
    </View>
  )
}

export default PhoneNumberInput
