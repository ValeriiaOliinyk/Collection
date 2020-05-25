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

if (savedTheme === Theme.LIGHT) {
  addClass(Theme.LIGHT);
}

if (savedTheme === Theme.DARK) {
  refs.input.setAttribute('checked', true);
  addClass(Theme.DARK);
}

function onChange(event) {
  if (event.target.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
    removeTheme(Theme.LIGHT);
    addTheme(Theme.DARK);
  }

  if (!event.target.checked) {
    changeTheme(Theme.DARK, Theme.LIGHT);
    removeTheme(Theme.DARK);
    addTheme(Theme.LIGHT);
  }
}

function changeTheme(oldClass, newClass) {
  refs.body.classList.replace(oldClass, newClass);
}

function addClass(newClass) {
  refs.body.classList.add(newClass);
}

function addTheme(value) {
  localStorage.setItem('theme', value);
}

function removeTheme(value) {
  localStorage.removeItem('theme', value);
}
