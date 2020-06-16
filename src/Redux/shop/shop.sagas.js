import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from '../types';
import { fetchCollectionsSuccess, fetchCollectionsError } from './shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
