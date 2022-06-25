import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CATEGORIES_SUCCESS, CATEGORIES_REQUEST, CATS_REQUEST, CATS_SUCCESS,
} from '../actions/home';
import Api from '../../api/api';

function* handleGetCategories() {
  try {
    const data = yield call(Api.getCategoriesList);
    yield put({
      type: CATEGORIES_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
  }
}

function* handleGetCats(action) {
  try {
    console.log(action.payload.id, 'id');
    const data = yield call(Api.getCatsList, action.payload.data);
    yield put({
      type: CATS_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
  }
}

export default function* watcher() {
  yield takeLatest(CATS_REQUEST, handleGetCats);
  yield takeLatest(CATEGORIES_REQUEST, handleGetCategories);
}
