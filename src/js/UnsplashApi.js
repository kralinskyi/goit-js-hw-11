'use strict';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export class UnsplashAPI {
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  page = 1;
  query = null;

  fetchPhotos() {
    return instance.get('/search/photos?', {
      params: {
        query: this.query,
        page: this.page,
        per_page: 12,
        color: 'teal',
        client_id: this.#API_KEY,
      },
    });
  }
}
