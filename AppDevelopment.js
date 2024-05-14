import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedVegetable, setSelectedVegetable] =
    useState('Select A Vegetable');

  // Define a list of available vegetables and fruits in an array, with the price listed.
  const vegetables = [
    { name: 'Potato', price: 5 },
    { name: 'Carrot', price: 8 },
    { name: 'Tomtato', price: 6 },
    { name: 'Broccoli', price: 7 },
    { name: 'Cucumber', price: 5 },
  ];

  const fruits = [
    { name: 'Potato', price: 11 },
    { name: 'Carrot', price: 12 },
    { name: 'Tomtato', price: 10 },
    { name: 'Broccoli', price: 9 },
    { name: 'Cucumber', price: 12 },
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}> Welcome To The Pogs Online Shopping App </Text>

      <Image
        source={{
          uri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84bf5cbd493522068f869afd62',
        }}
        style={styles.image}
      />
      
      <Picker
        style={styles.pickerStyle}
        selectedValue={selectedVegetable}
        onValueChange={(itemValue) => setSelectedVegetable(itemValue)}>
        
        <Picker.Item label="Select A Vegetable" value="selectVege" />

        {vegetables.map((vegetable, index) => (
          
          <Picker.Item
            key={index}
            label={`${vegetable.name} - $${vegetable.price}`}
            value="VegetablePicker"
          />
        ))}
      
      </Picker>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1C1E',
    alignItems: 'center',
    flex: 1,
  },

  pickerStyle: {
    textAlign: 'center',
  },

  text: {
    marginTop:50,
    color: '#ffffff',
    fontSize: 28,
    marginBottom: 20,
    textShadowColor: 'fafafa',
    textAlign: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
