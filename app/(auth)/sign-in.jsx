import { Image, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { router, Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  const submit = () => {
    router.push('/(tabs)/home')
  }
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center 
          min-h-[83px]
          h-full
          px-4 my-6">
            <Image
              source = {images.logo}
              resizeMode="contain" className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white text-semibold
            mt-10 font-semibold">
              Log in Aora
            </Text>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              otherStyles="mt-7"
            />
            <CustomButton
                title="Log in"
                handlePress={() => {submit}}
                containerStyles="w-full mt-7"
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account? 
              </Text>
              <Link href="/sign-up" className="text-lg text-secondary font-psemibold">
                Sign up
              </Link>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn