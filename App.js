import React,{Component} from "react";
import { BottomNavigation, Text } from 'react-native-paper';

import HomeRoute from "./screens/Homex/Home";

import WishlistRoute from './screens/Wishlist/wish';
import TesRoute from './screens/Tes/Tes';
import Profil from './screens/Profil/Profil';
import Routes from './navigator/homenavigasi';
import Login from  './screens/Profil/Login'

const ChatRoute = () => <Text>Chat</Text>;


export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'search' , color: 'white'},
      { key: 'wishlist', title: 'Wish', icon: 'favorite-border', color: 'white' },
      { key: 'chat', title: 'Chat', icon: 'question-answer', color: 'white' },
      { key: 'Profil', title: 'Profil', icon: 'perm-identity', color: 'white' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home : Routes,
    wishlist: WishlistRoute,
    chat: ChatRoute,
    Profil:Profil
  
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor="orange"
        inactiveColor="silver"
      />
    );
  }
}