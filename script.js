// DATA
let myLibrary = [];
let hasRead = false;

// REFERENCES
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author-name');
const pagesNumber = document.querySelector('#pages-number');
const readCheck = document.querySelector('#read-check');
const addButton = document.querySelector('.add-button');

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

