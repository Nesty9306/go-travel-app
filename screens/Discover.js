import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Avatar from "../assets/avatar.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import ItemContainer from './ItemContainer'
const Discover = () => {
 

   

    return (
      <SafeAreaView   className="flex-1 bg-white relative">
       <View className="flex-row items-center justify-between px-6 mt-2">
         <View>
            <Text className="text-[35px] text-[#0B646B] font-bold">Discover</Text>
            <Text className="text-[25px] text-[#527283]">the beauty today</Text>
         </View>

         <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
           <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
         </View>
       </View>


       <ScrollView>

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[21px] font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[21px] font-bold">Expore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>



          <View className="px-4 mt-2 flex-row items-center justify-between flex-wrap">
  

  <ItemContainer />
           
          </View>
        </View>

       </ScrollView>
        
      </SafeAreaView>
    )

}

export default Discover