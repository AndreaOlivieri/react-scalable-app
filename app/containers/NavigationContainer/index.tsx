/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navigation from "../../components/Navigation";
import {requestTopicsAction} from "./actions";

const stateSelector = createStructuredSelector({
  navigationContainer: makeSelectNavigationContainer(),
});

interface Props {

}

function NavigationContainer(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'navigationContainer', reducer: reducer });
  useInjectSaga({ key: 'navigationContainer', saga: saga });

  const {
    navigationContainer: {
      navigationContainer
    }
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  dispatch(requestTopicsAction());

  return (
    <Navigation
      topics={navigationContainer && navigationContainer.topics}
      {...props}
    />
  );
}

export default NavigationContainer;
