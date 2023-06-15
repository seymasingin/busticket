import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Seferler from './screens/Seferler';
import Giris from './screens/Giris';
import Kayit from './screens/Kayit';
import Ara from './screens/Ara';
import Odeme from './screens/Odeme';
import Detay from './screens/Detay';
import Basarili from './screens/Basarili';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <Provider store= {store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Giris" component={Giris} options={{headerShown: false}}/>
          <Stack.Screen name="Kayit" component={Kayit} options={{headerShown: false}}/>
          <Stack.Screen name="Ara" component={Ara} options={{headerShown: false}}/>
          <Stack.Screen name="Seferler" component={Seferler} options={{headerShown: false}}/>
          <Stack.Screen name="Detay" component={Detay} options={{headerShown: false}}/>
          <Stack.Screen name="Odeme" component={Odeme} options={{headerShown: false}}/>
          <Stack.Screen name="Basarili" component={Basarili} options={{headerShown: false}}/>
          
          
          
        </Stack.Navigator>   
      </NavigationContainer>
    </Provider>
  );
}


