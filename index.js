import { start } from './modules/start.js';
import { listButton, addButton, contactButton } from './modules/DisplaySections.js';
import input from './modules/input.js';
import displayBooks from './modules/DisplayBook.js';

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
