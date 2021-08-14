import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_NEW_NUMBER, SET_GENERATE_NUMBER } from '../actions/types';

const initialState = {
  numbers: [],
  generateNumber: false,
};

export default function numbersReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_NEW_NUMBER:
      let existNumbers: any[] = state.numbers;
      existNumbers.push({
        cardIndex: action.payload,
        number: Math.random(),
      });
      AsyncStorage.setItem('numbers', JSON.stringify(existNumbers));
      return {
        ...state,
        numbers: existNumbers,
      };

    case SET_GENERATE_NUMBER:
      return {
        ...state,
        generateNumber: !state.generateNumber,
      };

    default:
      return state;
  }
}
