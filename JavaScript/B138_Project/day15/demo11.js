//write a Book class with Publisher 'Akshara' and subject -- JS, Python, Java

class Book{
    static publisher = 'Akshara';
    subject;

    constructor(subject){
        this.subject=subject;
    }

    print()
    {
        console.log('Publisher', Book.publisher);
        console.log('subject', this.subject);
    }
}

let objBook1 = new Book('JS');
objBook1.print();

let objBook2 = new Book('Python');
objBook2.print();

let objBook3 = new Book('Java');
objBook3.print();
