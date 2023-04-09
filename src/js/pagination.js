'use strict';

import { JsonplaceholderAPI } from './jsonplaceholder-api';

import createPostsCards from '../templates/posts.hbs';

const postWrapperEl = document.querySelector('.js-posts');

const loadMoreBtnEl = document.querySelector('.load-more-btn');

const JSONPlaceholderApi = new JsonplaceholderAPI();

const handleLoadPosts = () => {
  JSONPlaceholderApi.page += 1;

  JSONPlaceholderApi.fetchPosts()
    .then(data => {
      postWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      const { count, page } = JSONPlaceholderApi;

      if (100 / count === page) {
        loadMoreBtnEl.remove();
      }
    });
};

loadMoreBtnEl.addEventListener('click', handleLoadPosts);

handleLoadPosts();
