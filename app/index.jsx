import { Image,Text, View, ScrollView } from 'react-native'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
export default function App() {
  return (
    <SafeAreaView className="bg-primary height-full">
      <ScrollView contentContainerStyle={{ height:'100%'}}>
        <View className="w-full h-full
        justify-start items-center 
        min-h-[85vh] px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max w-[380px] w-full h-[380px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Dicover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] 
              absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-regular 
          text-gray-100 mt-7 text-center">Where creavity meets innovations:
            embark on a journey of endless possibilities with Aora.
          </Text>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => {router.push('/sign-in')}}
            containerStyles="w-full mt-7" // Use object for styles
          />

        </View>
        <StatusBar backgroundColor='#161622'
        style='light'
        />
      </ScrollView>
      
    </SafeAreaView>
  )
}

