namespace Utility{
    export namespace Fees{
        export function calculateLateFee(daysLate: number): number{
            return daysLate * 0.25;

        }
    }
    export  function MaxBooksAllowed(age:number):number{
        return age<12?3:10;
    }
    function privateFunction(): void{
        console.log('private Function')
    }

}