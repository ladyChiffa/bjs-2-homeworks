class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    set state(newState){
        if(newState > 100) {
            this._state = 100;
        }
        else if(newState < 0) {
            this._state = 0;
        }
        else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        if(this.state === 0){
            return;
        }
        let newState = this.state * 1.5;
        this.state = newState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state <= 30) {
            return;
        }
        this.books.push(book);
    }

    findBookBy (type, value) {
        let n = this.books.findIndex( book => book[type] === value );
        if (n < 0) return null;
        return this.books[n];
    }

    giveBookByName (name){
        let n = this.books.findIndex( book => book.name === name );
        if (n < 0) return null;
        let book = this.books.splice(n, 1);
        return book[0];
    }
}


class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark (mark, subjectName) {
        if (mark < 2 || mark > 5) return;
        if (this.marks[subjectName] == null) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }

    getAverageBySubject (subjectName) {
        if(this.marks[subjectName] == null) return 0;
        if(this.marks[subjectName].length == 0) return 0;

        let sum = this.marks[subjectName].reduce(
            (sum, next) => sum + next,
            0
        );
        return sum / this.marks[subjectName].length;
    }

    getAverage () {
        let subjects = Object.keys(this.marks);
        if (subjects.length == 0) return 0;

        let sum = subjects.reduce(
            (sum, next) => sum + this.getAverageBySubject(next),
            0
        )

        return sum / subjects.length;
    }
}
