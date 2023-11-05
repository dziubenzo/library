const library = [];
const booksDiv = document.querySelector('.books');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

library.push(new Book('Ślepnąc od świateł', 'Jakub Żulczyk', 520, true));
library.push(new Book('How to Win at Chess', 'Levy Rozman', 272, false));
library.push(new Book('Historia bez cenzury', 'Wojciech Drewniak', 288, true));

function displayBooks() {
  let index = 0;
  for (book of library) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-book-id', `${index}`);
    booksDiv.appendChild(card);
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
    read.setAttribute('class', 'read');
    if (book.read) {
      read.textContent = 'Read';
    } else {
      read.textContent = 'Not read';
    }
    card.appendChild(read);
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', './css/delete-icon.svg');
    deleteIcon.setAttribute('alt', 'Delete Icon');
    card.appendChild(deleteIcon);
    index++;
  }
}

displayBooks();
