import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, itle } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

class ListItem extends Component {

  cekNominal = nominal => {
    const reverse = nominal
      .toString()
      .split("")
      .reverse()
      .join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");
    return hasil;
  };

  render() {
    return (

      <Card style={styles.container}>
        <TouchableOpacity onPress={this.props.hehe}>
          <Card.Cover style={styles.image}
            source={{ uri: this.props.image }} />
        </TouchableOpacity>
        <Card.Content>
          <View style={styles.descriptionContainer}>
            <Text style={styles.jenis}>{this.props.jenis}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.kondisi}>{this.props.kondisi}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.alamat}>{this.props.alamat}</Text>
          </View>
          <View>
            <Text style={styles.harga}>
              Rp {this.cekNominal(this.props.harga)} / Bulan
            </Text>
          </View>
          <View style={styles.namaContainer}>
            <Text style={styles.namaTempat}>{this.props.namaTempat}</Text>
          </View>
          <View>
            <Button
              onPress={this.props.heheNav}
              style={[styles.buttonx]}>
              <Text style={styles.booking}>{this.props.status}</Text>
            </Button>
          </View>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 0
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 17,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  booking: {
    alignSelf: "center",
    color: "white",
    fontWeight: 'bold'
  },
  descriptionContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  bookingContainer: {
    marginTop: 2,
    padding: 5,
    backgroundColor: "#e67e22",
    width: 120,
    borderRadius: 15
  },
  jenis: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  buttonx: {
    borderRadius: 30,
    width: 130,
    marginBottom: 1,
    marginRight: 230,
    backgroundColor: '#e67e22',
  },
  kondisi: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  alamat: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 14,
    top: 2
  },
  harga: {
    fontSize: 18,
    color: "black",
    fontWeight: "700"
  },
  namaContainer: {
    paddingVertical: 5
  },
  namaTempat: {
    color: "black",
    fontSize: 18,
    fontWeight: "400"
  },
  separated: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    color: "black",
    fontWeight: "700"
  },
});
export default ListItem;