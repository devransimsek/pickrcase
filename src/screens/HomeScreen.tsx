import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewNumber } from '../actions/numbers-actions';
import { Card, Logs } from '../components';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.setItem('numbers', '[]');
    dispatch(addNewNumber());
    dispatch(addNewNumber());
    dispatch(addNewNumber());
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.container}>
            <Card />
            <Card />
            <Card />
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
