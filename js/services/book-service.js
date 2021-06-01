'use strict'

var gBooks = createBooks()
var gSort = 'SORT-TITLE'
var gSortName = {
    sorted: false,
    lowFirst: false,
}

var gSortPrice = {
    sorted: false,
    lowFirst: false,
}



function testing() {
    document.querySelector('.price-num').classList.toggle('hidden')
    document.querySelector('.price-form').classList.toggle('hidden')
}

function removeBook(bookId) {
    var idx = gBooks.findIndex(function (book) { return bookId === book.id })
    console.log(idx);
    gBooks.splice(idx, 1)
    saveToStorage('books', gBooks)
}


function _createBook(title, price, img = `<img src="img/sus.png">`, rating = 0, id) {
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
        books = [_createBook('Amogos', 15,), _createBook('Colombus', 10, '<img src="img/colombus.png">'), _createBook('Augustus', 20, '<img src="img/augustus.png">')]
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

    var newPrice = +prompt('how much?')
    var book = gBooks.find(function (book) { return bookId === book.id })
    if (!newPrice) newPrice = bookId.price
    else book.price = newPrice

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



// function setSort(sortBy) {
//     gSort = sortBy;
//     getBooksToShow()

// }

// function onSetSort(sortBy) {
//     setSort(sortBy);
//     renderBooks()
// }



function setSortName() {
    gSortName.sorted = true
    if (gSortName.sorted) {
        gSortName.lowFirst = !gSortName.lowFirst
    }
    gSortPrice.sorted = false
    gSortPrice.lowFirst = false
}

function setSortPrice() {
    gSortPrice.sorted = true
    if (gSortPrice.sorted) {
        gSortPrice.lowFirst = !gSortPrice.lowFirst
    }
    gSortName.sorted = false
    gSortName.lowFirst = false
}




function getBooksToShow() {

    var books = loadFromStorage('books')
    if (gSortName.sorted && gSortName.lowFirst) {
        books.sort(function (a, b) {
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        })
    } else if (gSortName.sorted && !gSortName.lowFirst) {
        books.sort(function (a, b) {
            return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        })
    } else if (gSortPrice.sorted && gSortPrice.lowFirst) {
        books.sort(function (a, b) {
            return b.price - a.price
        })
    } else if (gSortPrice.sorted && !gSortPrice.lowFirst) {
        books.sort(function (a, b) {
            return a.price - b.price
        })

    }
    return books
}

// function getBooksToShow() {

//     var books = loadFromStorage('books')
//     if (gSort === 'SORT-TITLE') {
//         books.sort(function (a, b) {
//             return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
//         })
//     } else if (gSort === 'SORT-PRICE') {
//         books.sort(function (a, b) {
//             return b.price - a.price
//         })
//     }
//     return books
// }