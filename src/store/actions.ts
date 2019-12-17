import {
  Action,
  RequestRepositoryList,
  RequestRepositoryListSucceeded
} from './types';
import { Repository } from '../service/api/repositories/types/Repository';

/**
 * Action Types (Redux Types). This is not Typescript types, that's why they
 * are not in the types.ts file.
 */

const REQUEST_REPOSITORY_LIST: RequestRepositoryList =
  'REQUEST_REPOSITORY_LIST';
const REQUEST_REPOSITORY_LIST_SUCCEEDED: RequestRepositoryListSucceeded =
  'REQUEST_REPOSITORY_LIST_SUCCEEDED';

export const ActionTypes = {
  REQUEST_REPOSITORY_LIST,
  REQUEST_REPOSITORY_LIST_SUCCEEDED
};

/**
 * Action Creators
 */

export const ActionCreators = {
  requestRepositoryList: (page: number): Action => ({
    type: REQUEST_REPOSITORY_LIST,
    payload: page
  }),

  requestRepositoryListSucceeded: (repositories: Repository[]): Action => ({
    type: REQUEST_REPOSITORY_LIST_SUCCEEDED,
    payload: repositories
  })
};
