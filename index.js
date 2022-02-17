import { start } from './modules/start.js';
import { listButton, addButton, contactButton } from './modules/DisplaySections.js';
import input from './modules/input.js';
import displayBooks from './modules/DisplayBook.js';
import { DateTime } from './luxon.js';

const addBtn = document.querySelector('.add_book_btn');
const listBtn = document.querySelector('.list');
const addNewBtn = document.querySelector('.add_new');
const contactBtn = document.querySelector('.contact');

addBtn.addEventListener('click', () => {
  input();
});

document.addEventListener('DOMContentLoaded', () => {
  start();
  displayBooks();
});

listBtn.addEventListener('click', () => {
  listButton();
});

addNewBtn.addEventListener('click', () => {
  addButton();
});

contactBtn.addEventListener('click', () => {
  contactButton();
});

const timeDisplay = document.querySelector('.time-display');

const setTime = () => {
  const time = DateTime.now();
  timeDisplay.textContent = '';
  timeDisplay.textContent = `${time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}`;
};

setInterval(setTime, 1000);
