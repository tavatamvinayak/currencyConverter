import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'


//Constants
import { currencyByRupee } from './../constants/currencyCountry';
//Component
import CurrencyButton from './../components/CurrencyButton';

// import Snackbar from 'react-native-snackbar';


const HomeScreen = () => {
    const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')



  const buttonPressed = (targetValue) => {
    if (!inputValue) {
      return (<> </>)
    }
    const inputAmount = parseFloat(inputValue) // // check for NaN is 
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return (<></>)
    }
  }

  return (
    <View>
       <View >
       
       <View className="my-10 ">
          {resultValue && (
            <Text className="text-4xl text-center "  >
              {resultValue}
            </Text>
          )}
        </View>
          <View className="flex-row my-5">
            
            <Text className="text-3xl">₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' //only for iOS
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            className="border rounded-md px-3 py-1 w-[70%] mx-4 "
            defaultValue="85    "
            />
          </View>
         
        <View >
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
           
            onPress={() => buttonPressed(item)}

            className={`${targetCurrency=== item.name && 'border bg-black text-white' }`}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
          
          />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen