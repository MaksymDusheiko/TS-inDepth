import {Book} from "../interfaces";
import {Category} from "../enums";

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length)
}

export function getAllBooks() {
    let books: Array<Book> = [
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        {id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.Angular2},
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.TypeScript}
    ]
    return books;
}

export function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailableBook = currentBook.title;
            break;
        }
    }
    console.log(`Total number of books: ${numberOfBooks}`)
    console.log(`first available: ${firstAvailableBook}`)
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    const titles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category) {
            titles.push(currentBook.title);
            break;
        }
    }
    return titles

}

export function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title)
    }
}

export function getBookByID(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`

}


export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Cheking out books for ${customer}`);
    const titiles: string[] = [];
    for (let id of bookIDs) {
        const book = getBookByID(id)
        if (book && book.available) {
            titiles.push(book.title);
        }
    }
    return titiles
}


export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProp: any): string[] {
    const allBooks: any[] = getAllBooks();
    const titles: string[] = [];
    if (typeof bookProp === 'string') {
        for (let book of allBooks) {
            if (book.author == bookProp) {
                titles.push(book.title);
            }
        }
    }

    if (typeof bookProp === 'boolean') {
        for (let book of allBooks) {
            if (book.available == bookProp) {
                titles.push(book.title);
            }
        }
    }

    return titles

}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}


interface LibMgrCallback {
    (err: Error, title: string[]): void;
}

export function getBookByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category)
            if (titles.length > 0) {
                callback(null, titles);
            }
            else {
                throw new Error('No books found')
            }

        }
        catch (error) {
            callback(error, null)
        }
    }, 2000)
}


export function getBookByCategoryPromise(category: Category): Promise<string[]> {

    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category)
            if (titles.length > 0) {
                resolve(titles);
            }
            else {
                reject('No books found')
            }
        }, 2000)
    });
    return p
}


export function logCategorySearch(err: Error, title: string[]): void {
    if (err) {
        console.log(`Error message is ${err}`);
    }
    else {
        console.log('book titles is:');
        console.log(title);
    }
}
export async function logSearchResults(category: Category) {
    let foundBooks = await getBookByCategoryPromise(category);
    console.log(foundBooks);
}


