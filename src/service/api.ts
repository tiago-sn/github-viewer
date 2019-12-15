import axios from 'axios';
import { SearchRepositoriesData, PullRequest } from './repositories/types';

const baseURL = 'https://api.github.com';

const instance = axios.create({
  baseURL
});

/**
 * This Object has the methods to fetch data from Github Api.
 */
const api = {
  /**
   * @param {number} page - the pagination of the request. This method returns up to 100 results per page.
   * @returns {SearchRepositoriesData} the repositories list from Github Api.
   */
  searchRepositories: async (page: number) => {
    /**
     * @constant
     * @default
     */
    const params = {
      q: 'language:Javascript',
      sort: 'stars'
    };

    const response = await instance.get<SearchRepositoriesData>(
      '/search/repositories',
      {
        params: { ...params, page }
      }
    );

    return response.data;
  },

  /**
   * @param {string} owner - the user name that owns ther repository.
   * @param {string} name - the repository's name.
   * @returns {PullRequest[]} pull request list from Github Api.
   */
  PullRequests: async (owner: string, name: string) => {
    const response = await instance.get<PullRequest[]>(
      `repos/${owner}/${name}/pulls`
    );

    return response.data;
  }
};

export default api;
