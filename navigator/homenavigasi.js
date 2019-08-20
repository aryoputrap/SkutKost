import React, { Component } from 'react';
import { createStackNavigator, NavigationEvents, createAppContainer } from "react-navigation";

import Home from '../screens/Homex/HomeRender'
import List from '../screens/Listkota/List'
import Form from '../screens/Homex/Iklan/Form'
import Homedetail from '../screens/Homex/Detailkosan/HomeKostdetail'
import ListItem from '../screens/Listkota/ListItem'
import LihatDaftar from '../screens/Listkota/LihatDaftar'

// import Profil from '../screens/Profil/Profil'
// import Daftar from '../screens/Profil/Daftar'
// import Login from '../screens/Profil/Login'
// import detailProfil from '../screens/Profil/detailProfil'
  

import Kos from '../screens/Homex/Detailkosan/kostList'
import BookingCalender from '../screens/Homex/Detailkosan/BookingCalender.'

const Homenavigasi = createStackNavigator(
    { 
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
         Form: {
            screen: Form,
            navigationOptions: {
                header: null
            }
        },
        List: {
            screen: List,
            navigationOptions: {
                header: null
            }
        },
        LihatDaftar: {
            screen: LihatDaftar,
            navigationOptions: {
                header: null
            }
        },
        ListItem: {
            screen: ListItem,
            navigationOptions: {
                header: null
            }
        },   
         Homedetail: {
            screen: Homedetail,
            navigationOptions: {
                header: null
            }
        },
        // Profil: {
        //     screen: Profil,
        //     navigationOptions: {
        //         header: null
        //     }
        // },
        // Daftar: {
        //     screen: Daftar,
        //     navigationOptions: {
        //         header: null
        //     }
        // },
        // Login: {
        //     screen: Login,
        //     navigationOptions: {
        //         header: null
        //     }
        // },
        // detailProfil: {
        //     screen: detailProfil,
        //     navigationOptions: {
        //         header: null
        //     }
        // },


    });

export default Homenavigasi;

