import React from 'react';
import Home from './screens/home';
import ProductReview from './screens/productReview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={
          {
            headerTintColor: 'white',
            headerTitleStyle:{
              fontSize: 27,
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#223'
            }
          }
        }
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={
            {title: 'Fakestore'}
          }
        />
        <Stack.Screen 
          name='Review' 
          component={ProductReview} 
          options={
            { title: 'Product Review', }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
