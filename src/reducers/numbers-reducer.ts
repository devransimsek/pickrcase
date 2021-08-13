import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_NEW_NUMBER } from '../actions/types';

const initialState = {
  numbers: [],
};

export default function numbersReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_NEW_NUMBER:
      let existNumbers: any[] = state.numbers;
      existNumbers.push(Math.random());
      AsyncStorage.setItem('numbers', JSON.stringify(existNumbers));
      return {
        ...state,
        numbers: existNumbers,
      };

    default:
      return state;
  }
}
