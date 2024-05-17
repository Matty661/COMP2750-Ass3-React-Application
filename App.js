import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedVegetableQuantity, setSelectedVegetableQuantity] = useState(1);
  const [selectedFruitQuantity, setSelectedFruitQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const vegetables = [
    { name: 'Potato', price: 5 },
    { name: 'Carrot', price: 8 },
    { name: 'Tomato', price: 6 },
    { name: 'Broccoli', price: 7 },
    { name: 'Cucumber', price: 5 }
  ];

  const fruits = [
    { name: 'Orange', price: 11 },
    { name: 'Blueberry', price: 12 },
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 9 },
    { name: 'Grape', price: 12 }
  ];

  const calculateTotalPrice = () => {
    let vegetablePrice = 0;
    let fruitPrice = 0;

    if (selectedVegetable) {
      vegetablePrice = parseInt(selectedVegetable.split('-$')[1]);
    }

    if (selectedFruit) {
      fruitPrice = parseInt(selectedFruit.split('-$')[1]);
    }

    const totalPrice = (vegetablePrice * selectedVegetableQuantity) + (fruitPrice * selectedFruitQuantity);
    setTotalPrice(totalPrice);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Welcome to POGS Online Shopping App</Text>
      
      <Image source= {{sri: "https://i.imgur.com/PpO0kVq.png" }} />

      <View style={styles.dropdownContainer}>
        
        <Text style={styles.dropdownLabel}>Vegetables dropdown:</Text>
        
        <Picker
          style={styles.dropdownProduct}
          selectedValue={selectedVegetable}
          onValueChange={(itemValue) => setSelectedVegetable(itemValue)}
        >
          
          <Picker.Item label="Select a vegetable" value="" />
          
          {vegetables.map((vegetable, index) => (
            <Picker.Item key={index} label={`${vegetable.name} - $${vegetable.price}`} value={`${vegetable.name}-$${vegetable.price}`} />
          ))}
        
        </Picker>
        
        <Picker
          style={styles.dropdownAmt}
          selectedValue={selectedVegetableQuantity}
          onValueChange={(itemValue) => setSelectedVegetableQuantity(itemValue)}
        >
          
          {[1, 2, 3, 4, 5].map((quantity, index) => (
            <Picker.Item key={index} label={`${quantity}`} value={quantity} />
          ))}
       
        </Picker>
      
      </View>
      
      <View style={styles.dropdownContainer}>
        
        <Text style={styles.dropdownLabel}>Fruit dropdown:</Text>
        
        <Picker
          style={styles.dropdownProduct}
          selectedValue={selectedFruit}
          onValueChange={(itemValue) => setSelectedFruit(itemValue)}
        >
          
          <Picker.Item label="Select a fruit" value="" />
          
          {fruits.map((fruit, index) => (
            <Picker.Item key={index} label={`${fruit.name} - $${fruit.price}`} value={`${fruit.name}-$${fruit.price}`} />
          ))}
        
        </Picker>
        
        <Picker
          style={styles.dropdownAmt}
          selectedValue={selectedFruitQuantity}
          onValueChange={(itemValue) => setSelectedFruitQuantity(itemValue)}
        >
          
          {[1, 2, 3, 4, 5].map((quantity, index) => (
            <Picker.Item key={index} label={`${quantity}`} value={quantity} />
          ))}
        
        </Picker>
      
      </View>
      
      <Button title="Calculate" onPress={calculateTotalPrice} />
      
      <Text style={styles.totalPriceLabel}>Total Cost of Order: ${totalPrice}</Text>
      
      <Text style={styles.footer}>App developed by Angus, Sunny, Matthew </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#add8e6',
  },
  
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "Center",
  },

  dropdownContainer: {
    marginBottom: 20,
    textAlign: "center",
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  
  dropdownProduct: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: "center",
  },

  dropdownAmt: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: "center",
  },
  
  totalPriceLabel: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  
  footer: {
    marginTop: 50,
  },
});