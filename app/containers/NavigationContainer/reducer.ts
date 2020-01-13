/*
 *
 * NavigationContainer reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  topics: [],
  error: ''
};

function navigationContainerReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.REQUEST_TOPICS:
      return state;
    case ActionTypes.REQUEST_TOPICS_SUCCEEDED:
      debugger
      return {
        ...state,
        topics: action.payload,
        error: ''
      };
    case ActionTypes.REQUEST_TOPICS_FAILED:
      return {
        ...state,
        topics: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default navigationContainerReducer;
