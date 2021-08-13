import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNumber } from '../actions/numbers-actions';
import { Button } from '.';

const Card = () => {
  const dispatch = useDispatch();
  const { numbers } = useSelector((state: any) => state.numbers);

  return (
    <>
      <View style={styles.card}>
        {numbers.map((item: number) => (
          <Text key={item} style={styles.cardItemTitle}>
            {Math.floor(item * 10)}
          </Text>
        ))}
      </View>
      <Button title={'Generate'} onPress={() => dispatch(addNewNumber())} />
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  cardItemTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginRight: 5,
    lineHeight: 22,
  },
});
