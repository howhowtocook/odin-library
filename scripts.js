const myLibrary = [
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



const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

function Book(name, author,numberOfPages,readStatus) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
  // the constructor...
}

function addBookToLibrary(newBook) {
  // do stuff here  take user’s input and store the new book objects into an array
  myLibrary.push(newBook)
}

const display = document.querySelector('.display')

function makecard(book){
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = i

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

    const readStatusdiv = document.createElement('button');
    readStatusdiv.classList.add('readStatus');
    readStatusdiv.textContent = book.readStatus ? 'read' : 'unread';

    const removediv = document.createElement('button');
    removediv.classList.add('remove');
    removediv.textContent = 'remove'

    bottom.appendChild(readStatusdiv);
    bottom.appendChild(removediv);

    card.appendChild(top);
    card.appendChild(bottom);
    
    return card;
}


for (i=0;i<myLibrary.length;i++){
    const newcard = makecard(myLibrary[i])
    display.appendChild(newcard)
};



const status = document.querySelectorAll(".readStatus");

Array.from(
    status).forEach(
    (element)=>{
      element.addEventListener(
        "click",()=>{
            const index = element.parentNode.parentNode.id;
            myLibrary[index].readStatus = !myLibrary[index].readStatus;
            element.textContent = myLibrary[index].readStatus ? 'read' : 'unread';
    
        }); 

})

const removes = document.querySelectorAll(".remove");

Array.from(
    removes).forEach(
    (element)=>{
      element.addEventListener(
        "click",()=>{
            const cardToRemove = element.parentNode.parentNode; 
            const index = cardToRemove.id;
            myLibrary.splice(i, 1);
            // Get the i-th card
            console.log(cardToRemove)
            display.removeChild(cardToRemove);
}
        ); 

})



function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs, make a book object.
    newbook = new Book(document.getElementById('name').value,
    document.getElementById('author').value,
    document.getElementById('numberOfPages'),
    document.querySelector('.form input[type="checkbox"]').checked
    )
   
    
    // Create a new element to display the submitted content
    const newcard = makecard(newbook)
    myLibrary.push(newbook)
    // Append the new element to the end of the display zone
    display.appendChild(newcard);
    

    // Reset the form fields (optional)
    event.target.reset();
    modal.close();
}






