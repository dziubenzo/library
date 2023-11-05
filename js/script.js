const library = [];
const booksDiv = document.querySelector('.books');
const addBookDiv = document.querySelector('.add-book');
const addBookButton = document.querySelector("img[alt='Add Book Icon'");
const addBookButtonDiv = document.querySelector('.add-book-button');
const addBookFormDiv = document.querySelector('.add-book-form');
const titleField = document.querySelector("input[id='title-field'");

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
displayBooks();

// Display books already present in the library array
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
function showForm() {
  addBookButtonDiv.toggleAttribute('hidden');
  addBookFormDiv.toggleAttribute('hidden');
  titleField.focus();
}
