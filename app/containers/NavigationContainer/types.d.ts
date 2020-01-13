import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import Topic from "../../types/topic";

/* --- STATE --- */
interface NavigationContainerState {
  readonly topics: Topic[],
  readonly error: string,
}

/* --- ACTIONS --- */
type NavigationContainerActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = NavigationContainerState;
type ContainerActions = NavigationContainerActions;

export { RootState, ContainerState, ContainerActions };
