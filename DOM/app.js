const searchingBook = document.querySelector('#input-book');
searchingBook.addEventListener('input', function (event) {
    let destination = event.target.parentNode.parentNode
    .parentNode.nextElementSibling.childNodes[1];
    if (searchingBook.value.length !== 0) {
        searchedBook = compareBook(destination, searchingBook.value);
        searchedBook.forEach(
            (val) => {
                if (checkBook(destination,val))
                    addElement(destination, val);
            }
        )
    }
    else {
        let allBook = destination.querySelectorAll(".name");
        allBook.forEach(
            (val) => {
                val.parentNode.remove();
            }
        )
    }
})

function checkBook(object, book) {
    let bookList = object.querySelectorAll('.name')
    let existedBook = 0;
    bookList.forEach(
        (val) => {
            if (val.innerHTML.includes(book))
                existedBook = 1;
        }
    );
    if (existedBook === 1) return false;
    else return true;
}

function compareBook(object, bookName) {
    let bookList = document.querySelectorAll('#book-list .name');
    let newBookList = [];
    bookList.forEach(
        (val) => {
            if (!checkBook(object, bookName)) {
                let existedBookList = object.querySelectorAll('.name');
                existedBookList.forEach(
                    (val) => {
                        if (!val.innerHTML.includes(bookName))
                            val.parentNode.remove();
                });
            }
            if (val.innerHTML.includes(bookName))
                newBookList.push(val.innerHTML);
        }
    );
    return newBookList;
}

const delBtn = document.getElementById('book-list');
delBtn.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentNode.remove();
    }
})

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let newBook = event.target.parentNode.firstElementChild.value;
    let destination = event.target.parentNode.previousElementSibling.lastElementChild;
    addElement(destination, newBook);
    event.target.parentNode.firstElementChild.value = ""
})

function addElement(object, newBook) {
    let newElement = `<li>
    <span class="name" id="5">${newBook}</span>
    <span class="delete">delete</span>
    </li>`;
    object.insertAdjacentHTML('beforeend', newElement);
}

const viewCover = document.getElementById('book-list');
viewCover.addEventListener('click', function (event) {
    let cover = '';
    switch(event.target.id) {
        case '1':
            cover = 'NOTW';
            break;
        case '2':
            cover = 'TWMF';
            break;
        case '3':
            cover = 'KOTS';
            break;
        case '4':
            cover = 'TMAM';
            break;
        case '5':
            cover = 'IT'
            break;
    }
    event.target.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.firstElementChild.classList = cover;
});