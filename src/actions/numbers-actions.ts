import { ADD_NEW_NUMBER } from './types';

export const addNewNumber = () => (dispatch: any) =>
  dispatch({
    type: ADD_NEW_NUMBER,
  });
