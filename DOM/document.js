document.getElementById('');
document.getElementsByClassName('className');
document.getElementsByTagName('p');


const banner=document.getElementById('page-banner');
banner.classList.add('hello');
banner.classList.remove('remove');


const addBtn=document.querySelector('#add-btn');
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addBtn.classList.toggle('background-cyan');
    
    banner.classList.add('hello');
})



const myDiv=document.createElement('div');
myDiv.setAttribute('class', 'hello')
myDiv.innerText='Hello!';
banner.append(myDiv);
console.log(myDiv);

const H1tag=document.createElement('h1');
H1tag.innerHTML="HELLlllllllo"
const bookList=document.getElementById('book-list')
bookList.addEventListener('click',function(event){
    bookList.parentNode.appendChild(H1tag);
})




