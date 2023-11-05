const library = [];
const booksDiv = document.querySelector('.books');
const addBookDiv = document.querySelector('.add-book');
const addBookButton = document.querySelector("img[alt='Add Book Icon']");
const addBookButtonDiv = document.querySelector('.add-book-button');
const addBookFormDiv = document.querySelector('.add-book-form');
const addBookForm = document.querySelector('#form');
const titleField = document.querySelector("input[id='title-field']");
// const authorField = document.querySelector("input[id='author-field']");
// const pagesField = document.querySelector("input[id='pages-field']");

// const submitBookButton = document.querySelector(
//   "button[class='submit-book-button']"
// );

// Constructor function for Book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

// Add some books to the library array manually
library.push(new Book('Ślepnąc od świateł', 'Jakub Żulczyk', 520, true));
library.push(new Book('How to Win at Chess', 'Levy Rozman', 272, false));
library.push(new Book('Historia bez cenzury', 'Wojciech Drewniak', 288, true));
library.push(
  new Book('W pustyni i w puszczy', 'Henryk Sienkiewicz', 384, true)
);

addBookButton.addEventListener('click', showForm);
addBookForm.addEventListener('submit', addBookToLibrary);
displayBooks();

// Display books contained in the library array
function displayBooks() {
  let index = 0;
  for (book of library) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-book-id', `${index}`);
    booksDiv.insertBefore(card, addBookDiv);
    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.textContent = book.title;
    card.appendChild(title);
    const author = document.createElement('p');
    author.setAttribute('class', 'author');
    author.textContent = book.author;
    card.appendChild(author);
    const pages = document.createElement('p');
    pages.setAttribute('class', 'pages');
    pages.textContent = book.pages;
    card.appendChild(pages);
    const read = document.createElement('p');
    if (book.read) {
      read.textContent = 'Read';
      read.setAttribute('class', 'read');
    } else {
      read.textContent = 'Not read';
      read.setAttribute('class', 'unread');
    }
    card.appendChild(read);
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', './css/delete-icon.svg');
    deleteIcon.setAttribute('alt', 'Delete Icon');
    card.appendChild(deleteIcon);
    index++;
  }
}

// Display add book form
// Give the title form field focus
function showForm() {
  addBookButtonDiv.toggleAttribute('hidden');
  addBookFormDiv.toggleAttribute('hidden');
  titleField.focus();
}

function addBookToLibrary(event) {
  // Prevent form submission
  event.preventDefault();
  // Get form values
  const title = addBookForm.elements['title-field'].value;
  const author = addBookForm.elements['author-field'].value;
  const pages = addBookForm.elements['pages-field'].value;
  const read = addBookForm.elements['read-unread'].value;
  // Add the new book to the library array
  library.push(new Book(title, author, pages, read));
  // Remove books
  removeBooks();
  // Display books from the updated library array
  displayBooks();
  // Hide the add book form and show the add book icon
  addBookButtonDiv.toggleAttribute('hidden');
  addBookFormDiv.toggleAttribute('hidden');
}

// Remove all books from the DOM (helper function)
function removeBooks() {
  const bookCards = document.querySelectorAll('.card');
  bookCards.forEach((book) => {
    book.remove();
  });
}
