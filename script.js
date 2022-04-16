// DATA
let myLibrary = [];
let hasRead = false;
let totalBooksNumber = 0;
let totalReadBooks = 0;
let totalUnreadBooks = 0;

// REFERENCES
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author-name');
const pagesNumber = document.querySelector('#pages-number');
const readCheck = document.querySelector('#read-check');
const addButton = document.querySelector('.add-button');
const booksMenu = document.querySelector('.books-menu');
const totalBooks = document.querySelector('#total-books');
const unreadBooks = document.querySelector('#unread-books');
const readBooks = document.querySelector('#read-books');

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
    displayBooks();
    libraryReport();
    libraryReportText();
    cleanInput();
});

// FUNCTIONS
function checkHasRead(){
    if(readCheck.checked === true){
        hasRead = true;
    }
    else{
        hasRead = false;
    }
}

function addBookToLibrary(){
    checkHasRead();
    myLibrary.push(new Book(bookName.value, authorName.value, pagesNumber.value, hasRead));
}

function cleanInput(){
    bookName.value = "";
    authorName.value = "";
    pagesNumber.value = "";
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

        const hasReadButton = document.createElement('button');
        hasReadButton.textContent = "Change read status";
        hasReadButton.addEventListener('click', ()=>{
            if(bookHasRead.textContent === "Read: Yes"){
                bookHasRead.textContent = "Read: No";
                myLibrary[i].hasRead = false;
            }else{
                bookHasRead.textContent = "Read: Yes";
                myLibrary[i].hasRead = true;
            }
        })
        bookCard.appendChild(hasReadButton);

        booksMenu.appendChild(bookCard);
    }
}


// REPORT AREA
function libraryReport(){
    totalReadBooks = 0;
    totalUnreadBooks = 0;
    totalBooksNumber = 0;
    for(let book of myLibrary){
        if(book.hasRead === true){
            totalReadBooks +=1;
        }else{
            totalUnreadBooks+=1;
        }
    }
    totalBooksNumber = totalReadBooks + totalUnreadBooks;
}

function libraryReportText(){
    totalBooks.textContent = "Total Books: " + totalBooksNumber;
    unreadBooks.textContent = "Unread Books: " + totalUnreadBooks;
    readBooks.textContent = "Read Books: " + totalReadBooks;
}