import React, { Component } from 'react';
import {View} from 'react-native';
import {Header,Left,Text, Icon,Body,Right,  Button, Content, Container} from 'native-base';

export default class HeaderContent extends Component{
    
render(){
    return(
        
        <View>
            <Header style={{backgroundColor:"#e67e22"}}>
                <Left>
                       <Icon name="reorder"/>
                </Left>
                <Body>
                    <Text style={{color:"white",marginLeft:60, fontWeight: 'bold', alignContent:'space-between'}}>
                       SKUY-KOST
                    </Text>
                </Body>
                <Right>
                </Right>
            </Header>
         </View>
     );
   }
}