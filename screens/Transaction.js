import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner"
import * as Permissions from "expo-permissions"

export default class TransactionScreen extends Component {

  constructor(props){
super(props);
this.state = {
  domState:" normal",
  hasCameraPermisssions: null,
  scanned:false,
  scannedData:""
};
  }

  getCameraPermissions = async domState => {
    const {status} = await Permissions
    hasCameraPermisiions: status ==="granted";
    domstate:domstate
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
