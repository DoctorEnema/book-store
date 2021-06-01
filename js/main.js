'use strict'

function renderBooks() {
    var strHTML = `
    <th>ID</th>
    <th>Title</th>
    <th>Price</th>
    <th colspan="3">Actions</th>`

    var elBooks = document.querySelector('.books')
    for (var i = 0; i < gBooks.length; i++) {
        strHTML += `
    <tr>
    <td>${gBooks[i].id}</td>
    <td>${gBooks[i].title}</td>
    <td class="price-tag">
    <span class="price-num">${gBooks[i].price}</span>
    <span class="price-form hidden" <form onsubmit="onUpdateBook('${gBooks[i].id}',event)">
    <input type="text" name="PRICE" placeholder="Book price" autocomplete="off" size="3"></input>
    </form>

    </span>
    </td>
    <td onclick="visibleTooltip('${gBooks[i].id}')" class="action-btns read tooltip">Read
    <div class="tooltiptext book${gBooks[i].id} display">
    <div class="main-thing">
    <div class="top">
        <div>Title:${gBooks[i].title}</div>
        <div>Price:${gBooks[i].price}</div>
    </div>
    <div class="center">
    <div>${gBooks[i].img}</div>
    <button>-</button>
    <button>+</button>
    </div>

    <div class="bottom">
        <div class="rating">Rating:${gBooks[i].rating}</div>
        <div>ID:${gBooks[i].id}</div>
    </div>
</div>
    </div>
    </td>
    <td class="action-btns update" onclick="onUpdateBook('${gBooks[i].id}', event)">Update</td>
    <td class="action-btns delete" onclick="onRemoveBook('${gBooks[i].id}', event)">Delete</td>
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

function visibleTooltip(bookId) {
    // var idx = gBooks.findIndex(function (book) { return bookId === book.id })
    var toggleTooltip = document.querySelector('.book' + bookId)
    toggleTooltip.classList.toggle('display')
}


function readBook(bookId) {
    var book = gBooks.find(function (book) { return bookId === book.id })

    var elModal = document.querySelector('.book-modal')
    // elModal.classList.toggle('visibility')
    document.querySelector('.modal-title').innerText = `Title: ${book.title}`
    document.querySelector('.modal-price').innerText = `Price: ${book.price}`
    document.querySelector('.modal-image').innerHTML = `Image: ${book.img}`
    document.querySelector('.modal-rating').innerText = `Rating: ${book.rating}`
    document.querySelector('.modal-id').innerText = `ID: ${book.id}`
}
