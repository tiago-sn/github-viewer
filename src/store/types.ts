import { Repository } from '../service/api/repositories/types/Repository';

export interface ApplicationState {
  repositories: Repository[];
  currentRepository: Repository | null;
}

/**
 * Action Types (Typescript types)
 */

export type RequestRepositoryList = 'REQUEST_REPOSITORY_LIST';
export type RequestRepositoryListSucceeded = 'REQUEST_REPOSITORY_LIST_SUCCEEDED';

/**
 * Action Interfaces (Typescript Action Types)
 */

export interface RequestRepositoryListAction {
  type: RequestRepositoryList;
  payload: number;
}

export interface RequestRepositoryListSucceededAction {
  type: RequestRepositoryListSucceeded;
  payload: Repository[];
}

export type Action =
  | RequestRepositoryListAction
  | RequestRepositoryListSucceededAction;
