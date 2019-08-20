import React, { Component } from 'react';
import { createStackNavigator, NavigationEvents, createAppContainer } from "react-navigation";

import Profil from '../screens/Profil/Profil'
import Daftar from '../screens/Profil/Daftar'
import Login from '../screens/Profil/Login'
import detailProfil from '../screens/Profil/detailProfil'
  

const Profilnavigasi = createStackNavigator(
    {
        Profil: {
            screen: Profil,
            navigationOptions: {
                header: null
            }
        },
        Daftar: {
            screen: Daftar,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        detailProfil: {
            screen: detailProfil,
            navigationOptions: {
                header: null
            }
        },
    });

export default Profilnavigasi;

