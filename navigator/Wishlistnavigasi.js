import React, { Component } from 'react';
import { createStackNavigator, NavigationEvents, createAppContainer } from "react-navigation";

import Wish from '../screens/Wishlist/wish'
  

const Wishlistnavigasi = createStackNavigator(
    {
        Wish: {
            screen: Wish,
            navigationOptions: {
                header: null
            }
        },
        
    });

export default Wishlistnavigasi;

