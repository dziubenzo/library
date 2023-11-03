const books = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

books.push(new Book('Ślepnąć od świateł', 'Jakub Żulczyk', 520, true));
books.push(new Book('How to Win at Chess', 'Levy Rozman', 272, false));
books.push(new Book('Historia bez cenzury', 'Wojciech Drewniak', 288, true));

console.table(books);
