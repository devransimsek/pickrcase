import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNumber } from '../actions/numbers-actions';
import { Button } from '.';

const Card: React.FC<{
  cardIndex: string;
}> = ({ cardIndex }) => {
  const dispatch = useDispatch();
  const { numbers, generateNumber } = useSelector(
    (state: any) => state.numbers
  );

  useEffect(() => {
    dispatch(addNewNumber(cardIndex));
  }, [generateNumber]);

  return (
    <>
      <View style={styles.card}>
        {numbers
          .filter((x: any) => x.cardIndex === cardIndex)
          .map((item: any) => (
            <Text key={item.number} style={styles.cardItemTitle}>
              {Math.floor(item.number * 10)}
            </Text>
          ))}
      </View>
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
