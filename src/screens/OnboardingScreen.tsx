import ViewPager from "@react-native-community/viewpager"
import React from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import OnboardingPage from "../components/Page"


const onboarding_data = [{
  image: require("../../statics/onboard1.jpeg"),
  page: 0,
  title: "Algorithm",
  text: "Users go through a vetting process to ensure you never match with bots",
}, {
  image: require("../../statics/onboard2.jpeg"),
  title: "Matches",
  page: 2,
  text: "We match you with people that have a large array of similar interests",
}, {
  image: require("../../statics/onboard3.jpeg"),
  title: "Premium",
  page: 3,
  text: "Sign up today and enjoy premium benefits for free forever. Don't worry, bill's on us"
}]

const Onboarding = () => {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ViewPager style={{ flex: 1 }} >
        {onboarding_data.map((d, i) => {
          return (
            <View key={i}>
              <OnboardingPage
                image={d.image}
                page={i}
                title={d.title}
                text={d.text}
                total={onboarding_data.length}
              />
            </View>
          )
        })}
      </ViewPager>
    </SafeAreaView >
  )
}

export default Onboarding
