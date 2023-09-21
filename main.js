const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.toggleStatus = function () {
    this.status = !this.status;
}

function toggleStatus(index) {
    myLibrary[index].toggleStatus();
    refreshLibrary();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = document.querySelector('#status').checked;
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}


function showBooks() {

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
    addBookToLibrary();
    refreshLibrary();
})

function refreshLibrary() {
    const bookLibrary = document.querySelector('.library');
    bookLibrary.innerHTML = "";
    for (book of myLibrary) {
        let newBookCard = document.createElement('div');
        newBookCard.innerHTML = `<p>${getBookInfo(book)}</p>
        <button class="status-btn" onClick="toggleStatus(${myLibrary.indexOf(book)})">Toggle status</button>
        <button class=remove-btn onClick="removeBook(${myLibrary.indexOf(book)})">Remove</button`;
        bookLibrary.appendChild(newBookCard);
    }
}

function getBookInfo(book) {
    return `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages} \n Read: ${book.status}`;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    refreshLibrary();
}