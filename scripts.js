const bookList = [
    { 
        name: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        numberOfPages: 281, 
        readStatus: true 
    },
    { 
        name: "1984", 
        author: "George Orwell", 
        numberOfPages: 328, 
        readStatus: false 
    },
    { 
        name: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        numberOfPages: 180, 
        readStatus: true 
    },
    { 
        name: "Pride and Prejudice", 
        author: "Jane Austen", 
        numberOfPages: 279, 
        readStatus: true 
    },
    { 
        name: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        numberOfPages: 224, 
        readStatus: false 
    },
    { 
        name: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        numberOfPages: 310, 
        readStatus: true 
    },
    { 
        name: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        numberOfPages: 249, 
        readStatus: false 
    },
    { 
        name: "Brave New World", 
        author: "Aldous Huxley", 
        numberOfPages: 288, 
        readStatus: true 
    },
    { 
        name: "The Lord of the Rings", 
        author: "J.R.R. Tolkien", 
        numberOfPages: 1178, 
        readStatus: false 
    },
    { 
        name: "The Chronicles of Narnia", 
        author: "C.S. Lewis", 
        numberOfPages: 767, 
        readStatus: true 
    },
    { 
        name: "Harry Potter and the Philosopher's Stone", 
        author: "J.K. Rowling", 
        numberOfPages: 332, 
        readStatus: true 
    },
    { 
        name: "The Hunger Games", 
        author: "Suzanne Collins", 
        numberOfPages: 374, 
        readStatus: false 
    },
    { 
        name: "The Da Vinci Code", 
        author: "Dan Brown", 
        numberOfPages: 454, 
        readStatus: true 
    },
    { 
        name: "The Hitchhiker's Guide to the Galaxy", 
        author: "Douglas Adams", 
        numberOfPages: 193, 
        readStatus: true 
    },
    { 
        name: "The Girl with the Dragon Tattoo", 
        author: "Stieg Larsson", 
        numberOfPages: 465, 
        readStatus: false 
    },
    { 
        name: "Gone with the Wind", 
        author: "Margaret Mitchell", 
        numberOfPages: 1037, 
        readStatus: true 
    },
    { 
        name: "The Fault in Our Stars", 
        author: "John Green", 
        numberOfPages: 313, 
        readStatus: false 
    },
    { 
        name: "The Alchemist", 
        author: "Paulo Coelho", 
        numberOfPages: 208, 
        readStatus: true 
    },
    { 
        name: "The Picture of Dorian Gray", 
        author: "Oscar Wilde", 
        numberOfPages: 254, 
        readStatus: true 
    },
    { 
        name: "Frankenstein", 
        author: "Mary Shelley", 
        numberOfPages: 280, 
        readStatus: false 
    },
    // Add more book objects as needed
];

class Book {
    constructor(name, author, numberOfPages, readStatus) {
        this.name = name;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.readStatus = readStatus;
    }

    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }
}



//To initialize the library with the provided bookList, you can modify the Library class constructor to accept an optional parameter for the initial list of books. Here's how you can do it:

class Library {
    constructor(books = []) {
        this.books = [];
        this.display = document.querySelector('.display');
        this.modal = document.querySelector('#modal');
        this.openModalButton = document.querySelector('.open-button');
        this.closeModalButton = document.querySelector('.close-button');

        this.openModalButton.addEventListener('click', () => {
            this.modal.showModal();
        });

        this.closeModalButton.addEventListener('click', () => {
            this.modal.close();
        });

        // Add initial books to the library
        books.forEach(book => {
            this.addBook(book);
        });
    }

    addBook(book) {
        this.books.push(book);
        this.displayBook(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            this.display.removeChild(book.cardElement);
        }
    }

    displayBook(book) {
        const card = this.makeCard(book);
        book.cardElement = card;
        this.display.appendChild(card);
    }

    makeCard(book) {
        const card = document.createElement('div');
        card.classList.add('card');

        const top = document.createElement('div');
        top.classList.add('top');

        const namediv = document.createElement('div');
        namediv.classList.add('name');
        namediv.textContent = book.name;

        const authordiv = document.createElement('div');
        authordiv.classList.add('author');
        authordiv.textContent = book.author;

        const numberOfPagesdiv = document.createElement('div');
        numberOfPagesdiv.classList.add('numberOfPages');
        numberOfPagesdiv.textContent = book.numberOfPages + ' pages';

        top.appendChild(namediv);
        top.appendChild(authordiv);
        top.appendChild(numberOfPagesdiv);

        const bottom = document.createElement('div');
        bottom.classList.add('bottom');

        const readStatusButton = document.createElement('button');
        readStatusButton.classList.add('readStatus');
        readStatusButton.textContent = book.readStatus ? 'read' : 'unread';
        readStatusButton.addEventListener('click', () => {
            book.toggleReadStatus();
            readStatusButton.textContent = book.readStatus ? 'read' : 'unread';
        });

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'remove';
        removeButton.addEventListener('click', () => {
            this.removeBook(book);
        });

        bottom.appendChild(readStatusButton);
        bottom.appendChild(removeButton);

        card.appendChild(top);
        card.appendChild(bottom);

        return card;
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const numberOfPages = document.getElementById('numberOfPages').value;
        const readStatus = document.querySelector('.form input[type="checkbox"]').checked;
        const newBook = new Book(name, author, numberOfPages, readStatus);
        this.addBook(newBook);
        event.target.reset();
        this.modal.close();
    }

    initializeWithBookList(bookList) {
        bookList.forEach(bookInfo => {
            const book = new Book(bookInfo.name, bookInfo.author, bookInfo.numberOfPages, bookInfo.readStatus);
            this.addBook(book);
        });
    }
}

const myLibrary = new Library();
myLibrary.initializeWithBookList(bookList);

// Add event listener to form submission
document.querySelector('.form').addEventListener('submit', (event) => myLibrary.handleSubmit(event));