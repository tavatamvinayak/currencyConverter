
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar  />
     <View className="px-3 py-5">
     <HomeScreen />
     </View>
    </SafeAreaView>
  );
}


