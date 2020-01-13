/*
 *
 * NavigationContainer actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';
import Topic from '../../types/topic';

export const requestTopicsAction = () => action(ActionTypes.REQUEST_TOPICS);
export const requestTopicsSucceededAction = (topics: Topic[]) => action(ActionTypes.REQUEST_TOPICS_SUCCEEDED, topics);
export const requestTopicsFailedAction = (message: string) => action(ActionTypes.REQUEST_TOPICS_FAILED, message);
