import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar} from "react-native";
import { Content, Icon, Body, Right, View, Badge } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Text, Appbar,Button  } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HeaderContent from './HeaderContent';
import Kota from './Kota'
import Iklan from './Iklanhome'
import List from '../Listkota/List'

import PasangIklan from '../../component/PasangIklan'


export default class HomeRender extends Component {
    render() {
     
      return (
        <Content style={{backgroundColor: 'white'}}>
         
          <View>
          
          <HeaderContent/>
            <View>
                <Text style={styles.tagx}>Mau cari tempat dimana?</Text>
            </View>
              <View>

                <Button style={styles.Searchbar}  icon="search" mode="contained"> Search </Button>
              </View>

              <Button style={styles.buttonx} mode="contained">
                <Text style={{color: 'white',fontWeight:'bold'}}>Promo Skut</Text>
              </Button>

             <Iklan/>
             <View style={{flexDirection:'row', alignItems: 'space-between', height: 30, marginVertical: 30}}>
              <View style={{flexDirection:'row', alignItems: 'space-between', position: 'absolute'}}>
                <Text style={styles.tag}>Tertarik mengiklankan Kostmu ? </Text>

              <PasangIklan pasang={()=> this.props.navigation.navigate('Form')}/>
              </View>
            </View>


            <Button style={styles.buttonx}>
              <Text style={{color: 'white',fontWeight:'bold'}}>Kota Poluler</Text>
            </Button>

            <Kota hehe={()=> this.props.navigation.navigate('List')}/>
          </View>
        </Content>   
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
    padding: 15,
    },
    
    slide: {
        borderRadius: 20
    },
    
    Aheader: {
    backgroundColor: '#16a085',
    fontWeight: 'bold',
    },
    
    title : {
    alignItems: 'center',
    },
    
    tag : {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#16a085'
    },
    tagx: {
      marginTop: 20,
      fontSize: 15,
      marginLeft: 15,
  
      fontWeight: 'bold',
      color: '#16a085'
    },
    
    Searchbar: {
    borderRadius: 20,
    width: null,
    marginLeft: 10,
    marginRight:10,
    height: 40,
    marginTop: 5,
    backgroundColor: '#95a5a6',
    opacity: 0.3,
    },
    
    line: {
      backgroundColor: 'silver',
      height: 10,
      padding: 0,
      marginTop: 20
    },
    
    button: {
      borderRadius: 50,
      width: 155,
      marginTop: 10,
      backgroundColor: '#e67e22',
      marginHorizontal: 20,
      },
    buttonx: {
        borderRadius: 20,
        width: 130,
        marginTop: 10,
        marginBottom:5,
        marginRight:200,
        marginLeft: 10,
        backgroundColor: '#e67e22',
        },
    });