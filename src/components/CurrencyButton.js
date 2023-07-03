import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({name,flag}) => {
  
  return (
    <View className="border px-4 py-2 rounded-md m-1 " >
            <Text className="text-center">{flag}</Text>
            <Text >{name}</Text>
        </View>
  )
}

export default Button   