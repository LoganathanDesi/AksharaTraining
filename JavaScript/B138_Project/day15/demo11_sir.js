//create Book class with publisher-'Akshara' and subject--JS Python Java ...
class Book{

    static  publisher='Akshara';

    constructor(subject,mrp){
        this.subject=subject;
        this.mrp=mrp;
    }

    book_details()
    {
        console.log('Publisher:',Book.publisher);
        console.log('Subject:',this.subject);
        console.log('MRP:',this.mrp);
    }
} 


let objBook1 = new Book('JS','$100');
objBook1.book_details();

let objBook2 = new Book('Python','$200');
objBook2.book_details();

let objBook3 = new Book('Java','$300');
objBook3.book_details();