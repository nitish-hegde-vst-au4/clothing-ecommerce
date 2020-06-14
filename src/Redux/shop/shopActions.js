import { actionTypes } from '../types';

export const updateCollections = (collection) => ({
  type: actionTypes.UPDATE_COLLECTION,
  payload: collection,
});
