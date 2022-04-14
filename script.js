// DATA
let myLibrary = [];
let hasRead = false;

// REFERENCES
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author-name');
const pagesNumber = document.querySelector('#pages-number');
const readCheck = document.querySelector('#read-check');
const addButton = document.querySelector('.add-button');
const booksMenu = document.querySelector('.books-menu');

// CONSTRUCTORS
function Book(title, author, pagesNumber, hasRead){
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.hasRead = hasRead;
}

// EVENT LISTENERS
addButton.addEventListener('click', ()=>{
    addBookToLibrary();
    cleanInput();
    displayBooks();
});

readCheck.addEventListener('click', ()=>{
    checkHasRead();
})


// FUNCTIONS
function checkHasRead(){
    if(readCheck.checked == true){
        hasRead = true;
    }
}

function addBookToLibrary(){
    myLibrary.push(new Book(bookName.value, authorName.value, pagesNumber.value, hasRead));
}

function cleanInput(){
    bookName.value = "";
    authorName.value = "";
    pagesNumber.value = "";
    hasRead = false;
    readCheck.checked = false;
}

function displayBooks(){
    for(let i = myLibrary.length -1; i<myLibrary.length; i++){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = "Author: " + myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = "Pages: " + myLibrary[i].pagesNumber;
        bookCard.appendChild(bookPages);

        const bookHasRead = document.createElement('p');
        if(myLibrary[i].hasRead){
            bookHasRead.textContent = "Read: Yes";
        }
        else{
            bookHasRead.textContent = "Read: No"
        }
        bookCard.appendChild(bookHasRead);

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', ()=>{
            myLibrary.splice(myLibrary.indexOf(bookCard), 1);
            booksMenu.removeChild(bookCard);
        })

        bookCard.appendChild(removeButton);
        booksMenu.appendChild(bookCard);
    }
}
