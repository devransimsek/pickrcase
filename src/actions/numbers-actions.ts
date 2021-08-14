import { ADD_NEW_NUMBER, SET_GENERATE_NUMBER } from './types';

export const addNewNumber = (cardIndex: string) => (dispatch: any) =>
  dispatch({
    type: ADD_NEW_NUMBER,
    payload: cardIndex,
  });

export const setGenerateNumber = () => (dispatch: any) =>
  dispatch({
    type: SET_GENERATE_NUMBER,
  });
