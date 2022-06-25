import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

class Api {
  static getCategoriesList() {
    return api.get('/categories');
  }

  static getCatsList(data) {
    return api.get('/images/search', { params: { category_ids: data.id, page: data.page, limit: 10 } });
  }
}

export default Api;
