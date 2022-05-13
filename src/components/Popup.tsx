import React, { ReactNode, useEffect, useState } from "react"
import {
  Animated, KeyboardAvoidingView,
  Modal, Platform, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle
} from "react-native"

const SUPPORTED_ORIENTATIONS: Array<"portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right"> = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
]

type Props = {
  animationType?: "none" | "slide" | "fade" | undefined
  height?: number
  minClosingHeight?: number
  openDuration?: number
  closeDuration?: number
  closeOnDragDown?: boolean
  closeOnPressMask?: boolean
  closeOnPressBack?: boolean
  open: boolean
  keyboardAvoidingViewEnabled?: boolean
  containerStyles?: StyleProp<ViewStyle>
  wrapperStyles?: StyleProp<ViewStyle>
  draggableIconStyles?: StyleProp<ViewStyle>
  onClose?(): void,
  onOpen?(): void,
  children?: ReactNode
}

const Popup = ({
  animationType = "none",
  height = 260,
  minClosingHeight = 0,
  openDuration = 200,
  closeDuration = 200,
  closeOnDragDown = false,
  closeOnPressMask = true,
  closeOnPressBack = true,
  keyboardAvoidingViewEnabled = Platform.OS === "ios",
  containerStyles = {},
  wrapperStyles = {},
  draggableIconStyles = {},
  onClose,
  onOpen,
  open,
  children = <View />
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0))

  const setModalVisible_f = (visible: boolean) => {
    if (visible) {
      setModalVisible(true)
      onOpen?.()
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: height,
        duration: openDuration
      }).start()
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: minClosingHeight,
        duration: closeDuration
      }).start(() => {
        setAnimatedHeight(new Animated.Value(0))
        setModalVisible(false)
      })
    }
  }

  const close = () => {
    onClose?.()
  }

  useEffect(() => {
    setModalVisible_f(open)
  }, [open])

  return (
    <Modal
      transparent
      animationType={animationType}
      visible={modalVisible}
      supportedOrientations={SUPPORTED_ORIENTATIONS}
      onRequestClose={() => {
        if (closeOnPressBack) setModalVisible_f(false)
      }}
    >
      <KeyboardAvoidingView
        enabled={keyboardAvoidingViewEnabled}
        behavior="padding"
        style={[styles.wrapper, wrapperStyles]}
      >
        <TouchableOpacity
          style={styles.mask}
          activeOpacity={1}
          onPress={() => (closeOnPressMask ? close() : null)}
        />
        <Animated.View
          style={[styles.container, { height: animatedHeight }, containerStyles]}
        >
          {closeOnDragDown && (
            <View
              style={styles.draggableContainer}
            >
              <View style={[styles.draggableIcon, draggableIconStyles]} />
            </View>
          )}
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 0,
    overflow: "hidden",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#ccc"
  }
})

export default Popup
