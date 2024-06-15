const library = document.querySelector(".library");
const addbookbtn = document.querySelector(".addbookbtn");
const booksubmit = document.querySelector(".booksubmit");
const dialog = document.querySelector("dialog");
const form = document.querySelector('form');
const titleinput = document.querySelector("#title");
const authorinput = document.querySelector("#author");
const pagesinput = document.querySelector("#pages");
const readinput = document.querySelector("#read");

const myLibrary = [];

//function book(title, author, pages, read){
  //  this.title = titleinput.value;
    //this.author = authorinput.value;
    //this.pages = pagesinput.value;
    //this.read = readinput.checked;
//}

class book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
const theWitcher = new book('The Witcher', 'Andrzej Sapkowski', 500, false);
myLibrary.push(theWitcher);
displaybooks();



function addBookToLibrary(){
    const newBook = new book(titleinput.value, authorinput.value, pagesinput.value, readinput.checked);
    myLibrary.push(newBook);
    displaybooks();
}
function appendBook(book){
    const bookCard = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardRead = document.createElement('button');
    const cardButton = document.createElement('button');

    bookCard.classList.add("bookcard");
    bookCard.setAttribute('id', myLibrary.indexOf(book));
    cardTitle.classList.add("cardtitle");
    cardAuthor.classList.add("cardauthor");
    cardPages.classList.add("cardpages");
    cardButton.classList.add("cardbutton");

    cardButton.textContent = "DELETE"

    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardPages.textContent = `${book.pages} pages`;
    if (book.read === false){
        cardRead.textContent = "NOT READ"
        cardRead.classList.add("cardnotread");
    }
    else{
        cardRead.textContent = "READ";
        cardRead.classList.add("cardread");
    }

    cardRead.addEventListener('click', ()=> {
        book.read = !book.read;
        displaybooks();
    })
    cardButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displaybooks();
    })

    library.appendChild(bookCard);
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPages);
    bookCard.appendChild(cardRead);
    bookCard.appendChild(cardButton);
}

function resetForm(){
    titleinput.value = "";
    authorinput.value = "";
    pagesinput.value = "";
    readinput.checked = false;
}


addbookbtn.addEventListener('click', () =>{
    dialog.showModal();
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addBookToLibrary(title, author, pages, read);
    resetForm();
    dialog.close();
})
function displaybooks(){
    const books = document.querySelectorAll(".bookcard");
    books.forEach(bookCard => library.removeChild(bookCard));

    for(i = 0; i < myLibrary.length; i++){
        appendBook(myLibrary[i]);
    }
}

