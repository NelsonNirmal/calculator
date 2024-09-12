// components/Calculator.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        {['C', '(', ')', '/'].map((item) => (
          <Button key={item} title={item} onPress={item === 'C' ? clearInput : () => handleInput(item)} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[7, 8, 9, '*'].map((item) => (
          <Button key={item} title={item.toString()} onPress={() => handleInput(item.toString())} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[4, 5, 6, '-'].map((item) => (
          <Button key={item} title={item.toString()} onPress={() => handleInput(item.toString())} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[1, 2, 3, '+'].map((item) => (
          <Button key={item} title={item.toString()} onPress={() => handleInput(item.toString())} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="0" onPress={() => handleInput('0')} />
        <Button title="." onPress={() => handleInput('.')} />
        <Button title="=" onPress={calculateResult} />
      </View>
    </View>
  );
};

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#1c1c1e',
    padding:15, 
  },
  result: {
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'right',
  },
  input: {
    fontSize: 50,
    color: '#ffffff', 
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2c2c2e', // Button background color
    flex: 1,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  buttonText: {
    fontSize: 30,
    color: '#00bcd4', // Button text color
  },
});

export default Calculator;