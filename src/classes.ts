import {logger, sealed, writable} from "./decorators";
import * as Interfaces from "./interfaces";


@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} asfsf`)
    }
    @writable (true)
    assistFaculty(){
        console.log('ASsist Faculty')
    }
    @writable(false)
    assistCommunity(){
        console.log('teaching comunity')
    }
}


abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log(' creating new ReferenceItem .....')
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    //
    private _pulisher: string;
    static depatment: string = 'Classical'

    constructor(public title: string,
                protected year: number) {
        console.log(' creating new ReferenceItem .....')
        // this.title = newTitle;
        // this.year = newYear;
    }


    get publisher(): string {
        return this._pulisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._pulisher = newPublisher
    }

    abstract printCitation(): void

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(` Departament ${ReferenceItem.depatment}`)

    }
}

export {UniversityLibrarian,ReferenceItem}
