import { Image, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
import { Link } from 'expo-router'
const SignUp = () => {
  const [form, setForm] = React.useState({
    username: '',  
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const submit = () => {createUser();}
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center 
          h-full
          px-4 my-6">
            <Image
              source = {images.logo}
              resizeMode="contain" className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white text-semibold
            mt-10 font-semibold">
              Sign up to Aora
            </Text>
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({...form, username: e})}
              otherStyles="mt-10"
            />
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
                title="Sign up"
                handlePress={() => {submit()}}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link href="/sign-in" className="text-lg text-secondary font-psemibold">
                Sign in
              </Link>
            </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp