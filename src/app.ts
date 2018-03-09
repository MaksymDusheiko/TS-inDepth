///<reference path="decorators.ts"/>
import {getFileName} from "gulp-typescript/release/tsapi";
import {getBookByCategory, getBookByCategoryPromise, logCategorySearch, logSearchResults, purge} from './lib/utility-functions';
import Shelf from './shelf';
import {Category} from "./enums";
import RefBook from "./encyclopedia";
import {Book, Logger, Author, Librarian, Magazine} from "./interfaces";
import {UniversityLibrarian, ReferenceItem} from "./classes";
import 'babel-polyfill'


showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
//24
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');


//23
// console.log('begin')
// getBookByCategoryPromise(Category.JavaScript)
//     .then(titles=> console.log(titles))
//     .catch(err=>console.log(err))
// console.log('End')


//22
// console.log('begin')
// getBookByCategory(Category.JavaScript, logCategorySearch)
// console.log('End')





//18
// const magazines: Array<Magazine> = [
//     {title: 'Programming Language Monthly', publisher: 'Code Mags'},
//     {title: 'Literary Fiction Quarterly', publisher: 'College Press'},
//     {title: 'Five Points', publisher: 'GSU'}
// ];
//
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
//
// //19
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'))

//18
// const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine.title);

//17
// const inventory: Array<Book> =    [
//         { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//         { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//         { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//         { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//     ];
//
// const purgedBooks = purge<Book>(inventory);
// console.log(purgedBooks);
//
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
//
//
// const firstBook = bookShelf.getFirst();
// console.log(firstBook.title);
//


//
//
// const refBook:RefBook = new RefBook( 'sdvbbdfgsuper Title', 2222,2012)
// refBook.printItem()
// refBook.printCitation()
// console.log(refBook)


//11
// const ref: ReferenceItem = new ReferenceItem('Facts and other shit', 2018);
// ref.printItem();
// ref.publisher = 'Amaxone'
// console.log(ref.publisher)
// console.log(ReferenceItem.depatment)


/// 10
// const favoriteLibrarianes: Librarian = new UniversityLibrarian();
// favoriteLibrarianes.name = 'anna';
// favoriteLibrarianes.assistCustomer('sdfs');

//
// //----9------
// const favoriteAuthor: Author = {
//     email: 'Anna@gmail.com',
//     name: "Anna",
//     numBooksPublished: 3
//
// }
//
// const favoriteLibrarian: Librarian = {
//     name: 'Borise',
//     email: 'Boris@gmail.com',
//     department: "fiction Department",
//     assistCustomer: (name: string) => console.log(name)
// }
//
//
// //--------
//
// let logDamage: Logger;
// logDamage = (reason: string): void => console.log(reason)
// logDamage('afasasdafafaf')

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamage: (reason: string): void => console.log(`damaged reason ${reason}`)
//     // year: 2015,
//     // copies: 3
// }
//
// printBook(myBook)
// myBook.markDamage('missing back cover')
//
// let chechedOutBooks = getTitles(false);
// console.log(chechedOutBooks)
//
//
// const myBooks = checkoutBooks('ann', 1, 2, 3);
// myBooks.forEach(title => console.log(title));

//
// createCustomer('sdf')
// createCustomer('sdf', 20)
// createCustomer('sdf', 205, 'Kyiv')
//
// console.log(())
//
// logFirstAvailable(getAllBooks())
// logBookTitles(getBookTitlesByCategory(Category.Angular2))
//
//
// // ---- task3
// const jsBooks: Array<string> = getBookTitlesByCategory(Category.JavaScript)
//
// jsBooks.forEach(title => console.log(title));
// console.log(getBookByID(3))

//   4
// let myID = createCustomerID('Ann', 10)
// console.log(myID)
//
// let IdGenerator: (name: string, id: number) => string;
// IdGenerator = (name: string, id: number): string => `${name}${id}`;
// IdGenerator = createCustomerID
//
// myID = IdGenerator('dfdfs', 456)