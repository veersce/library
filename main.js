class Library {

    books = [];

    toggleStatus(index) {
        this.books[index].toggleStatus();
        this.refreshLibrary();
    }

    addBookToLibrary() {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let status = document.querySelector('#status').checked;
        let book = new Book(title, author, pages, status);
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.refreshLibrary();
    }

    refreshLibrary() {
        const bookLibrary = document.querySelector('.library');
        bookLibrary.innerHTML = "";
        for (let book of this.books) {
            let newBookCard = document.createElement('div');
            newBookCard.innerHTML = `<p>${book.bookInfo}</p>
                <button class="status-btn" onClick="myLibrary.toggleStatus(${this.books.indexOf(book)})">Toggle status</button>
                <button class="remove-btn" onClick="myLibrary.removeBook(${this.books.indexOf(book)})">Remove</button>`;
            bookLibrary.appendChild(newBookCard);
        }
    }
}

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    toggleStatus() {
        this.status = !this.status;
    }

    get bookInfo() {
        return `Title: ${this.title} \n Author: ${this.author} \n Pages: ${this.pages} \n Read: ${this.status}`;
    }
}

// Displays the form after clicking "add book" button
const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', () => {
    let addBookForm = document.querySelector('.add-book-form');
    addBookForm.style.display = "block";
})

// Makes submit button add new book to the library
const addBookToLibraryBtn = document.querySelector('.add-book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    myLibrary.addBookToLibrary();
    myLibrary.refreshLibrary();
})

let myLibrary = new Library();