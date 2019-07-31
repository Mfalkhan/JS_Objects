class Library {
    constructor(){
        this.books = [];
        this.patrons = [];
        this.fine = 0.1;
    }
  
    addBook(book) {
        this.books.push(book);
    }
    
    addPatron(patron) {
        this.patrons.push(patron);
    }

    checkFines(){
        const now = new Date();
        const patronDue = this.patrons.filter(patron =>
             (patron.currentBook.dueDate < now && patron.currentBook !== null)
             );

        for (let patron of patronDue ){
            const diffDate = new Date(now - patron.currentBook.dueDate);
            const spendDue = diffDate.getDate();
            patron.balance += this.fine * spendDue;
        }
    }
}
