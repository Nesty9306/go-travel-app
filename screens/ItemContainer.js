import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

let items = [
   {
    key: 1,
    imageSrc: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg",
    title: "People woman travel",
    location: ""
   } , {
    key: 2,
    imageSrc: "https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_640.jpg",
    title: "Go pro",
    location: ""
   }, {
    key: 3,
    imageSrc: "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_640.jpg",
    title: "Japan Osaka",
    location: ""
   }, {
    key: 4,
    imageSrc: "https://cdn.pixabay.com/photo/2019/06/01/22/41/river-4245261_640.jpg",
    title: "River canyon",
    location: ""
   }, {
    key: 5,
    imageSrc: "https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_640.jpg",
    title: "Adventure altitude",
    location: ""
   }, {
    key: 6,
    imageSrc: "https://cdn.pixabay.com/photo/2017/08/07/10/05/neuschwanstein-2602208_640.jpg",
    title: "Palace london",
    location: ""
   }, {
    key: 7,
    imageSrc: "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_640.jpg",
    title: "Neuschwanstein castle",
    location: ""
   }
]


const ItemContainer = () => {
  return (
    <>
     {items.map(e => (
        <TouchableOpacity key={e.key} className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[48%] my-2">
      <Image source={{uri: e.imageSrc }} className="w-full h-40 object-cover"/>

      <Text className="text-[#428288] text-[18px] font-bold">
         {e.title?.length > 12 ? `${e.title.slice(0,12)}..` : e.title}
      </Text>

      <View className="flex-row items-center space-x-1">
       <FontAwesome name="map-marker" size={14} color={'#8597A2'} />
       <Text className="text-[#8597A2] text-[14px] font-bold">
         Dokta
       </Text>
      </View>
    </TouchableOpacity>
     ))}
    </>
    
  )
}

export default memo(ItemContainer)