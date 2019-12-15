import axios from 'axios';

const baseURL = 'https://api.github.com';
const defaultParams = {
  q: 'language:Javascript',
  sort: 'stars'
};

const instance = axios.create({
  baseURL
});

const api = {
  getRepositoryList: async (page: number) => {
    const response = await instance.get('/search/repositories', {
      params: { ...defaultParams, page }
    });

    return response.data;
  }
};
