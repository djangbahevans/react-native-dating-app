import React, { useState } from "react"
import { Image, Pressable, StyleProp, View, ViewStyle } from "react-native"
import { FontAwesome as Icon } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

type Props = {
  style?: StyleProp<ViewStyle>
}

const ImageSelector = ({ style }: Props) => {
  const [image, setImage] = useState("")

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <Pressable
      onPress={() => { pickImage() }}
      style={[style]}>
      {image
        ? <Image
          style={{ width: 100, height: 100, borderRadius: 15 }}
          source={{ uri: image }}
        />
        : <View
          style={{ width: 100, height: 100, borderRadius: 15, borderStyle: "dashed", borderColor: "#e94057", borderWidth: 1 }}
        />}
      <View
        style={{
          position: "absolute",
          backgroundColor: "#e94057",
          width: 34, height: 34,
          borderRadius: 17, borderColor: "white", borderWidth: 2,
          justifyContent: "center",
          bottom: -5,
          right: -5
        }}>
        <Icon
          style={{ color: "white", textAlign: "center" }}
          name="camera"
          size={16} />
      </View>
    </Pressable>)
}

export default ImageSelector
