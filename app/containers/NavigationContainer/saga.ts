import { takeLatest, call, put } from 'redux-saga/effects';
import ActionTypes from "./constants";
import {requestTopicsFailedAction, requestTopicsSucceededAction} from "./actions";

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceededAction(topics));
  } catch(e) {
    yield put(requestTopicsFailedAction(e.message));
  }
}

// Individual exports for testing
export default function* navigationContainerSaga() {
  yield takeLatest(ActionTypes.REQUEST_TOPICS, fetchTopics);
}
