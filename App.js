import React from 'react';
import { View, StatusBar } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import Homenavigasi from './navigator/Homenavigasi';
import Profilnavigasi from './navigator/Profilnavigasi'
import Wishlistnavigasi from './navigator/Wishlistnavigasi'
import { Header } from 'react-native-elements';


const mainNavigator = createBottomTabNavigator({
  Home: {
    screen: Homenavigasi,
    navigationOptions:  {
      tabBarIcon: ({
        tintColor
      }) => ( <Icon name = "home"
              color = {tintColor}
              size = {25} /> )
    }
  },
  
    Whishlist: {
      screen: Wishlistnavigasi,
      navigationOptions:  {
        tabBarIcon: ({
          tintColor
        }) => ( <Icon name = "heart"
                color = {tintColor}
                size = {25} /> )
      }
    },

  Profil: {
    screen: Profilnavigasi,
    navigationOptions:  {
      tabBarIcon: ({
        tintColor
      }) => ( <Icon name = "user-circle-o"
              color = {tintColor}
              size = {25} /> )
    }
  },
 }, 
 
 {

  initialRouteName : "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor : '#2980b9'
    },
    headerTintColor: '#FFF'
  },
  tabBarOptions: {
    activeTintColor: '#e67e22',
    inactiveTintColor: 'grey'
  }

});

export default createAppContainer(mainNavigator);