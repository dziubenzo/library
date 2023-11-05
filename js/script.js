const library = [];
const booksDiv = document.querySelector('.books');
const addBookDiv = document.querySelector('.add-book');
const addBookButton = document.querySelector("img[alt='Add Book Icon']");
const addBookButtonDiv = document.querySelector('.add-book-button');
const addBookFormDiv = document.querySelector('.add-book-form');
const addBookForm = document.querySelector('#form');
const titleField = document.querySelector("input[id='title-field']");
let deleteButtons;

// Constructor function for Book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.read = String(read);
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
  for (book of library) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
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
    if (book.read === 'true') {
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
  }
  // Update delete buttons
  // Listen for delete button clicks
  deleteButtons = document.querySelectorAll("img[alt='Delete Icon'");
  deleteButtons.forEach((button) => {
    button.addEventListener('click', removeOneBook);
  });
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
  removeAllBooks();
  // Display books from the updated library array
  displayBooks();
  // Clear form fields
  clearForm();
  // Hide the add book form and show the add book icon
  addBookButtonDiv.toggleAttribute('hidden');
  addBookFormDiv.toggleAttribute('hidden');
}

// Remove all books from the DOM (helper function)
function removeAllBooks() {
  const bookCards = document.querySelectorAll('.card');
  bookCards.forEach((book) => {
    book.remove();
  });
}

// Clear add book form fields and reset them to default (helper function)
function clearForm() {
  addBookForm.elements['title-field'].value = '';
  addBookForm.elements['author-field'].value = '';
  addBookForm.elements['pages-field'].value = '';
  addBookForm.elements['read-unread'].value = 'true';
}

// Remove a single book card from the DOM and library array
function removeOneBook(event) {
  // Remove from the DOM
  const bookCard = event.target.parentNode;
  bookCard.remove();
  // Remove from the library array;
  const title = bookCard.firstChild.innerHTML;
  let bookCardIndex = 0;
  for (book of library) {
    if (book.title === title) {
      bookCardIndex = library.indexOf(book);
      break;
    }
  }
  library.splice(bookCardIndex, 1);
  console.log(library);
}
