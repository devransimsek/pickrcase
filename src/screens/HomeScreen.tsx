import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewNumber, setGenerateNumber } from '../actions/numbers-actions';
import { Card, Logs, Button } from '../components';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.container}>
            <Card cardIndex={'1'} />
            <Card cardIndex={'2'} />
            <Card cardIndex={'3'} />
            <Button
              title={'Generate'}
              onPress={() => dispatch(setGenerateNumber())}
            />
            <Logs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
