import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';
import {Header,Left,Text, Icon,Body, Right,} from 'native-base';

export default class HeaderContent extends Component{
    
render(){
    return(
        
        <View>
            <Header style={{backgroundColor:"#e67e22"}}>
            <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
                
                
                
                <View style={{flex:1,}}>
                <Icon name="reorder" style={{position: 'absolute', top: 12, bottom: 12, fontSize: '20'}}/>
                    <Text style={{flex:1, color:"white", textAlign: 'center', fontWeight: 'bold', alignContent:'space-between', textAlignVertical: 'center'}}>
                       SKUT KOST
                    </Text>
                </View>
               
            </Header>
         </View>
     );
   }
}