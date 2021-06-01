'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {

    var books = getBooksToShow()
var strHTML = ''
    var elBooks = document.querySelector('.books')
    for (var i = 0; i < gBooks.length; i++) {
        strHTML += `
    <tr>
    <td>${books[i].id}</td>
    <td>${books[i].title}</td>
    <td class="price-tag">
    <span class="price-num">${formatCurrency(books[i].price)}</span>
    
    <span class="price-form hidden" <form onsubmit="onUpdateBook('${books[i].id}',event)">

    <input type="text" name="PRICE" placeholder="Book price" autocomplete="off" size="3"></input>
    </form>

    </span>
    </td>

    <td onclick="readBook('${books[i].id}')" class="action-btns read tooltip"><span data-trans="read">Read</span>
    <div class="tooltiptext book${books[i].id} display">

</div>
    </div>
    </td>
    <td data-trans="update" class="action-btns update" onclick="onUpdateBook('${books[i].id}', event)">Update</td>
    <td data-trans="delete" class="action-btns delete" onclick="onRemoveBook('${books[i].id}', event)">Delete</td>
    </tr>
    `
    }
    elBooks.innerHTML = strHTML
}

function onAddBook(ev) {
    ev.preventDefault()
    var elTitle = document.querySelector('input[name=TITLE]')
    var elPrice = document.querySelector('input[name=PRICE]')
    if (!elTitle.value || !elPrice.value) return
    addBook(elTitle.value, elPrice.value)
    elTitle.value = ''
    elPrice.value = ''
    renderBooks()
}

function onUpdateBook(bookId, ev) {
    ev.stopPropagation()
    updateBook(bookId)

    renderBooks()
}

function onRemoveBook(bookId, ev) {
    ev.stopPropagation()

    removeBook(bookId)
    renderBooks()
}

function readBook(bookId) {
    var book = gBooks.find(function (book) { return bookId === book.id })

    var elModal = document.querySelector('.book-modal')
    elModal.classList.remove('display')
    document.querySelector('.modal-title').innerText = book.title
    document.querySelector('.modal-price').innerText = formatCurrency(book.price)
    document.querySelector('.modal-image').innerHTML = book.img
    document.querySelector('.modal-rating').innerText = book.rating
    document.querySelector('.modal-id').innerText = book.id
}

function onCloseModal(){
    document.querySelector('.book-modal').classList.add('display')
}


function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    renderBooks();
    doTrans();
}


function onSetSortNames() {
    document.querySelector('.price-triangle').classList.toggle('arrow-up')
    document.querySelector('.name-triangle').classList.remove('arrow-up')
    setSortName();
    renderBooks()
}

function onSetSortPrice() {
    document.querySelector('.name-triangle').classList.toggle('arrow-up')
    document.querySelector('.price-triangle').classList.remove('arrow-up')
    setSortPrice();
    renderBooks()
}
