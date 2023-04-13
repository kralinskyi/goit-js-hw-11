// ? ************************************** //
import { UnsplashAPI } from './UnsplashApi';
import createGalleryCards from '../templates/gallery-card.hbs';

const unsplashAPI = new UnsplashAPI();

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

async function onSearchBtnClick(e) {
  e.preventDefault();

  try {
    const searchQuery = e.target.elements['user-search-query'].value.trim();
    unsplashAPI.query = searchQuery;

    const { data } = await unsplashAPI.fetchPhotos(searchQuery);
    if (!data.results.length) {
      console.log('No such photos!');
      return;
    }
    if (data.total_pages === unsplashAPI.page) {
      return;
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (error) {
    loadMoreBtnEl.classList.add('is-hidden');
    galleryListEl.textContent = 'images dont found';
  }
}

async function onLoadMoreBtnClick() {
  unsplashAPI.page += 1;
  try {
    const { data } = await unsplashAPI.fetchPhotos(searchQuery);
    if (data.total_pages === unsplashAPI.page) {
      loadMoreBtnEl.classList.add('is-hidden');

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    }
  } catch (error) {
    console.log();
  }

  // console.log(unsplashAPI.fetchPhotos());
}

searchFormEl.addEventListener('submit', onSearchBtnClick);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
