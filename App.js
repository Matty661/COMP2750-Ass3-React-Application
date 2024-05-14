import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Picker, Button} from 'react-native';

export default function App() {

  const vegetablesSelectedValue = useState("Select A Vegetable");


// Define a list of available vegetables and fruits in an array, with the price listed.
const vegetables = [
  {name: "Potato", price: 5},
  {name: "Carrot", price: 8},
  {name: "Tomtato", price: 6},
  {name: "Broccoli", price: 7},
  {name: "Cucumber", price: 5},
];

const fruits = [
  {name: "Potato", price: 5},
  {name: "Carrot", price: 5},
  {name: "Tomtato", price: 5},
  {name: "Broccoli", price: 5},
  {name: "Cucumber", price: 5},
];

return (
  <View style = {styles}>

  <Text style = {styles.text}> Welcome To The Pogs App </Text>

  <Picker style = {styles.pickerStyle} />
    <Picker.Item label = {vegetablesSelectedValue} />
  </View>
);
}

const styles = StyleSheet.create({
  pickerStyle: {

  },

  text: {
    color: "#ff00ff",
    fontSize: 52,
    textAlign: 
  },
});