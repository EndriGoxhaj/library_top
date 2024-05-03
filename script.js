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

function book(title, author, pages, read){
    this.bookId = `book${++book.id}`;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
book.id = 0;
const book1 = new book('The witcher', 'X', '200', );
myLibrary.push(book1);
displayBook(book1);

function addBookToLibrary(){
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
}
function displayBook(book){
    const bookCard = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardRead = document.createElement('button');
    const cardButton = document.createElement('button');

    bookCard.classList.add("bookcard");
    cardTitle.classList.add("cardtitle");
    cardAuthor.classList.add("cardauthor");
    cardPages.classList.add("cardpages");
    cardButton.classList.add("cardbutton");

    cardButton.textContent = "DELETE"

    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardPages.textContent = `${book.pages} pages`;
    if (readinput.checked == true){
        cardRead.textContent = "READ";
        cardRead.classList.add("cardread");
    }
    else{
        cardRead.textContent = "NOT READ"
        cardRead.classList.add("cardnotread");
    }
    cardButton.onclick = remBook;

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
}


addbookbtn.addEventListener('click', () =>{
    dialog.showModal();
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    title = titleinput.value;
    author = authorinput.value;
    pages = pagesinput.value;
    read = readinput.value;

    addBookToLibrary(titleinput, authorinput, pagesinput, readinput);
    resetForm();
    dialog.close();
})

function remBook() {
    const bookId = this.parentElement.classList[1];
  
    const findBook = myLibrary.findIndex(
      (element) => element.bookId === bookId
    );
    const delBook = myLibrary.splice(findBook, 1);
    this.parentElement.remove();
}
function updatelibrary(library){
    library.innerHTML = "";
    console.log("hey");
    myLibrary.forEach(function(book){
        displayBook(book);
    })
}


