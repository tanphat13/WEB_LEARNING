const searchingBook = document.querySelector('#input-book');
console.log(searchingBook);
searchingBook.addEventListener('input', function(event) {

})

const delBtn = document.getElementById('book-list');
delBtn.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentNode.remove();
    }
})

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let newBook = event.target.parentNode.firstElementChild.value;
    addElement(event.target, newBook);
    event.target.parentNode.firstElementChild.value = ""
})

function addElement(object, newBook) {
    let newElement = `<li>
    <span class="name">${newBook}</span>
    <span class="delete">delete</span>
    </li>`;
    console.log(event.target.parentNode.previousElementSibling.lastElementChild.insertAdjacentHTML('beforeend',newElement));
}