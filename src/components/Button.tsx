import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = (props: any) => {
  return (
    <TouchableOpacity {...props} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
