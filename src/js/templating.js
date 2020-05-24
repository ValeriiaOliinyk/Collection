'use strict';

import items from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const markup = items(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
