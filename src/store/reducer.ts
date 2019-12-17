import { ApplicationState, Action } from './types';
import { ActionTypes } from './actions';

const INITIAL_STATE: ApplicationState = {
  repositories: [],
  currentRepository: null
};

export default function reducer(
  state = INITIAL_STATE,
  action: Action
): ApplicationState {
  switch (action.type) {
    case ActionTypes.REQUEST_REPOSITORY_LIST_SUCCEEDED:
      return {
        ...state,
        repositories: action.payload
      };
    default:
      return state;
  }
}
