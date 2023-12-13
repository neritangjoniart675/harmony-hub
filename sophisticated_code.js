/* 
   Filename: sophisticated_code.js
   Description: This code demonstrates a complex and highly sophisticated implementation
                of a library management system. It includes various classes, data structures,
                and functions to handle books, borrowers, and transactions.
*/

// Book class representing a book
class Book {
  constructor(id, title, author, availability) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.availability = availability;
  }

  // Method to update book's availability
  updateAvailability(status) {
    this.availability = status;
  }
}

// Borrower class representing a borrower
class Borrower {
  constructor(id, name, booksBorrowed) {
    this.id = id;
    this.name = name;
    this.booksBorrowed = booksBorrowed;
  }

  // Method to borrow a book
  borrowBook(book) {
    if (book.availability) {
      this.booksBorrowed.push(book);
      book.updateAvailability(false);
    } else {
      console.log("Book is not available");
    }
  }

  // Method to return a book
  returnBook(book) {
    const index = this.booksBorrowed.indexOf(book);
    if (index !== -1) {
      this.booksBorrowed.splice(index, 1);
      book.updateAvailability(true);
    } else {
      console.log("Book not found in borrower's records");
    }
  }
}

// Library class representing a library
class Library {
  constructor(name, books, borrowers) {
    this.name = name;
    this.books = books;
    this.borrowers = borrowers;
  }

  // Method to add a new book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to remove a book from the library
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Method to register a new borrower
  registerBorrower(borrower) {
    this.borrowers.push(borrower);
  }

  // Method to find all available books in the library
  getAvailableBooks() {
    return this.books.filter(book => book.availability);
  }

  // Method to find all books borrowed by a borrower
  getBooksBorrowedByBorrower(borrower) {
    return borrower.booksBorrowed;
  }

  // Method to find books borrowed by all borrowers
  getBooksBorrowed() {
    let borrowedBooks = [];
    for (const borrower of this.borrowers) {
      borrowedBooks = borrowedBooks.concat(borrower.booksBorrowed);
    }
    return borrowedBooks;
  }
}

// Initializing library, books, and borrowers
const library = new Library("My Library", [], []);

const book1 = new Book(1, "The Catcher in the Rye", "J. D. Salinger", true);
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", true);
const book3 = new Book(3, "1984", "George Orwell", true);

const borrower1 = new Borrower(1, "John Doe", []);
const borrower2 = new Borrower(2, "Jane Smith", []);

// Adding books to library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Registering borrowers
library.registerBorrower(borrower1);
library.registerBorrower(borrower2);

// Borrowing a book
borrower1.borrowBook(book1);

// Returning a book
borrower1.returnBook(book1);

// Getting available books
const availableBooks = library.getAvailableBooks();
console.log("Available Books:", availableBooks);

// Getting books borrowed by a borrower
const booksBorrowedByBorrower = library.getBooksBorrowedByBorrower(borrower1);
console.log("Books Borrowed by", borrower1.name, ":", booksBorrowedByBorrower);

// Getting all books borrowed
const booksBorrowed = library.getBooksBorrowed();
console.log("Books Borrowed:", booksBorrowed);