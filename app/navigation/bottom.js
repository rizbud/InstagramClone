import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/home'
import Explore from '../screens/explore'
import Upload from '../screens/upload'
import Store from '../screens/store'
import Account from '../screens/account'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon
          switch (route.name) {
            case 'Home':
              icon = focused ? 'home' : 'home-outline'
              break;
            case 'Explore':
              icon = focused ? 'search' : 'search-outline'
              break;
            case 'Upload':
              icon = focused ? 'add-circle' : 'add-outline'
              break;
            case 'Store':
              icon = focused ? 'cart' : 'cart-outline'
              break;
            case 'Account':
              icon = focused ? 'person' : 'person-outline'
              break;
            default:
              break;
          }
          return <Icon name={icon} size={30} />
        }
      })}
      tabBarOptions={{
        showLabel: false
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default BottomNavigation