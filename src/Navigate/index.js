import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {
  Home,
  Cart
} from '../Screen'

const Main = createBottomTabNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};


const index = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={ ( { route } ) => ( {
          tabBarIcon: ( { focused, color, size, } ) => {
            let iconName;

            if ( route.name === 'HOME' ) {
              iconName = 'home';
            } else if ( route.name === 'CART' ) {
              iconName = 'shoppingcart';
            }

            return <Icon name={ iconName } size={ size } color={ color } />
          }
        } ) }
        tabBarOptions={ {
          labelStyle: { fontSize: 15 },
          style: { marginBottom: 4 },
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
        } }>

        <Main.Screen
          name="HOME"
          component={ Home }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="CART"
          component={ Cart }
          options={ {
            headerShown: false,
          } }
        />
      </Main.Navigator>
    </NavigationContainer >
  )
}

export default index;
