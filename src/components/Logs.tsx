import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Button } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logs = () => {
  const [showLogsModal, setShowLogsModal] = useState(false);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const _getData = async () => {
    setShowLogsModal(true);
    setLoader(true);
    const _data: string = (await AsyncStorage.getItem('numbers')) || '[]';
    console.log(_data, 'data');
    setData(JSON.parse(_data));
    setLoader(false);
  };
  return (
    <>
      <Modal
        style={{ flex: 1 }}
        transparent
        animationType={'slide'}
        visible={showLogsModal}
        onRequestClose={() => setShowLogsModal(false)}
      >
        <View style={styles.modalCont}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowLogsModal(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {loader ? (
              <ActivityIndicator color={'blue'} />
            ) : (
              <FlatList
                data={data}
                columnWrapperStyle={{
                  marginTop: 10,
                }}
                style={{ flex: 1 }}
                numColumns={3}
                extraData={[]}
                ListEmptyComponent={<Text></Text>}
                // style={{ padding: 10 }}
                renderItem={({ item }) => (
                  <Text key={item} style={styles.cardItemTitle}>
                    {Math.floor(item * 10)}
                  </Text>
                )}
                keyExtractor={(item) => `${item}`}
              />
            )}
          </View>
        </View>
      </Modal>
      <Button title={'Show Logs'} onPress={() => _getData()} />
    </>
  );
};

export default Logs;

const styles = StyleSheet.create({
  content: {
    margin: 30,
    backgroundColor: 'white',
    flex: 1,
    maxHeight: Dimensions.get('screen').height / 1.5,
  },
  cardItemTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginRight: 5,
    lineHeight: 22,
    flex: 1,
    textAlign: 'center',
  },
  modalCont: {
    backgroundColor: '#0000006b',
    flex: 1,
    justifyContent: 'center',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginTop: 10,
    marginRight: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
