'use strict'

var gBooks = createBooks()

function onInit() { // should be in main
    renderBooks()
}

function testing(){
    document.querySelector('.price-num').classList.toggle('hidden')
    document.querySelector('.price-form').classList.toggle('hidden')
}

function removeBook(bookId) {
    var idx = gBooks.findIndex(function (book) { return bookId === book.id })
    console.log(idx);
    gBooks.splice(idx, 1)
    saveToStorage('books', gBooks)
}


function _createBook(title, price, img = '<img src="img/sus.png"', rating = 0, id) {
    var book = {
        id: _makeId(),
        title,
        price,
        img,
        rating: 0,
    }
    return book
}

function createBooks() {
    var books = loadFromStorage('books')
    if (!books || !books.length) {
        books = [_createBook('Amogos', 15, ), _createBook('Colombus', 10, '<img src="img/colombus.png"'), _createBook('Augustus', 20, '<img src="img/augustus.png"')]
        saveToStorage('books', books)
    }
    return books
}

function addBook(title, price) {
    var book = _createBook(title, price)
    gBooks.push(book)
    saveToStorage('books', gBooks)
}

function updateBook(bookId) {
    // document.querySelector('.price-num').classList.toggle('hidden')
    // document.querySelector('.price-form').classList.toggle('hidden')

    var newPrice = +prompt('how much?')
    var book = gBooks.find(function (book) { return bookId === book.id })
    book.price = newPrice

    saveToStorage('books', gBooks)
}

function removeBook(bookId) {
    var idx = gBooks.findIndex(function (book) { return bookId === book.id })
    gBooks.splice(idx, 1)
    saveToStorage('books', gBooks)
}

function _makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}



function setSort(sortBy) {
    gSort = sortBy;
}

function onSetSort(sortBy) {
    setSort(sortBy);
    // renderAdmin()
}


