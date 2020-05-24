'use strict';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

refs.input.addEventListener('change', onChange);

const savedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(savedTheme);

if (parsedTheme === Theme.DARK) {
  refs.input.setAttribute('checked', true);
  addClass('dark-theme');
}

function onChange(event) {
  if (event.target.checked) {
    removeClass('light-theme');
    addClass('dark-theme');
    removeTheme(Theme.LIGHT);
    addTheme(Theme.DARK);
  }

  if (!event.target.checked) {
    removeClass('dark-theme');
    addClass('light-theme');
    removeTheme(Theme.DARK);
    addTheme(Theme.LIGHT);
  }
}

function addClass(value) {
  refs.body.classList.add(value);
}

function removeClass(value) {
  refs.body.classList.remove(value);
}

function addTheme(value) {
  localStorage.setItem('theme', JSON.stringify(value));
}

function removeTheme(value) {
  localStorage.removeItem('theme', JSON.stringify(value));
}
