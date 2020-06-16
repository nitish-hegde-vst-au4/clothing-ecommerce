import { actionTypes } from '../types';

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsError = (error) => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
