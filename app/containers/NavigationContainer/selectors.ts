import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the navigationContainer state domain
 */

const selectNavigationContainerDomain = (state: ApplicationRootState) => {
  return state && state.navigationContainer || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by NavigationContainer
 */

const makeSelectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectNavigationContainer;
export { selectNavigationContainerDomain };
