import React, {Component} from "react";
import {View, StyleSheet, Content, Dimensions} from "react-native";
import {ScrollView, FlatList, TouchableOpacity} from "react-native-gesture-handler";
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import ListItem from "./ListItem";
import { Button } from "react-native-paper";
import ButtonFilter from '../../component/ButonFilter';




class LihatDaftar extends Component{
  constructor(props){
    super(props);
    this.state = {
      lihatDaftar:[
      {
        id:"1",
        jenis:"Pria",
        alamat:"Jakarta",
        image:"https://www.kostjakarta.net/wp-content/uploads/2015/12/488761.jpeg",
        harga:"1289000",
        namaTempat: "Kost Mr Haji",
        status:"Bisa Booking",
        kondisi:"Tinggal 1 Kamar"
      },
      {
        id:"2",
        jenis:"Putri",
        alamat:"Jakarta",
        image:"https://apollo-singapore.akamaized.net/v1/files/lgly7xr4o61a1-ID/image;s=966x691;olx-st/_1_.jpg",
        harga:"30000000",
        namaTempat : "Kost Mr Upin",
        status:"Bisa Booking",
        kondisi:"Tinggal 1 Kamar"
      },
      {
        id:"3",
        jenis:"Putri",
        alamat:"Jakarta",
        image:"https://rumahdijual.com/attachments/jakarta-pusat/6789266d1473067337-rumah-kost-mewah-full-furnish-okupensi-99-3-lantai-img_7455.jpg",
        harga:"2890000",
        namaTempat : "Kost Mr Ipin",
        status:"Bisa Booking",
        kondisi:"Tinggal 1 Kamar"
      },
      {
        id:"4",
        jenis:"Putri",
        alamat:"Jakarta",
        image:"https://imganuncios.mitula.net/dijual_rumah_tempat_kos_mewah_di_setiabudi_jaksel_3710045556893230331.jpg",
        harga:"1900000",
        namaTempat : "Kost Mrs Haji",
        status:"Bisa Booking",
        kondisi:"Tinggal 1 Kamar"
      },
       
      ]
    };
  }
  render() { 
    
    return(
      
      <View style={{ alignItems:'center'}}>
        
      <ScrollView style={{ top:0, left:0, right:0, bottom:0}}>
      <FlatList
        style={styles.stretch}
        data={this.state.lihatDaftar}
        renderItem={({item}) =>
        (
        <TouchableOpacity
          style={styles.kotaItem}>
          <ListItem
            jenis={item.jenis}
            separated={item.separated}
            kondisi={item.kondisi}
            alamat={item.alamat}
            image={item.image}
            harga={item.harga}
            namaTempat={item.namaTempat}
            status={item.status}
            heheNav={this.props.propMantap}
          />
        </TouchableOpacity>
        )}
        keyExtractor={item=>item.id}
        showVerticalScrollIndicator ={true}
        >
      </FlatList>
      </ScrollView>
      </View>  
   
    
     
     );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"column"
  },
  kotaItem: {
    marginTop:5,
    marginRight: 5
  }
});

export default LihatDaftar;