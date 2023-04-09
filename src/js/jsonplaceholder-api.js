'use strict';

// https://jsonplaceholder.typicode.com/

export class JsonplaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';

  page = 0;

  count = 50;

  fetchPosts() {
    return fetch(
      `${this.#BASE_URL}/posts?_limit=${this.count}&_page=${this.page}`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
  }
}
