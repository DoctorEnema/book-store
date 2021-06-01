'use strict'

var gTrans = {
    'store-title':{
        'en': 'Booksus',
        'he': 'בוקסוס',
    },
    'add':{
        'en': 'Add book',
        'he': 'הוסף',
    },
    'id':{
        'en': 'ID',
        'he': 'קוד',
    },
    'title':{
        'en': 'Title',
        'he': 'כותרת',
    },
    'price':{
        'en': 'Price',
        'he': 'מחיר',
    },
    'actions':{
        'en': 'Actions',
        'he': 'פעולות',
    },
    'read':{
        'en': 'Read',
        'he': 'קרא',
    },
    'update':{
        'en': 'Update',
        'he': 'עדכן',
    },
    'delete':{
        'en': 'Delete',
        'he': 'מחק',
    },
    'rating':{
        'en': 'Rating',
        'he': 'דירוג',
    },
    'title-placeholder':{
        'en': 'Book title',
        'he': 'כותרת הספר',
    },
    'price-placeholder':{
        'en': 'Book price',
        'he': 'מחיר הספר',
    },
}

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]

    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang];

    if (!txt) return keyTrans.en

    return txt
}

function doTrans() {
    // TODO: 
    var els = document.querySelectorAll('[data-trans]')
    // console.log(els);

    // for each el:
    //    get the data-trans and use getTrans to replace the innerText 
    els.forEach(function (el) {
        // console.dir(el)
        var txt = getTrans(el.dataset.trans)
        if (el.nodeName === 'INPUT') el.placeholder = txt;
        else el.innerText = txt
        //    ITP: support placeholder  
            
        // console.log('el.dataset', el.dataset.trans);       
    })
}

function setLang(lang) {
    gCurrLang = lang;
}