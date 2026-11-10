let myString: string = "243";
let myNumber: number = 243;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol("mySymbol");
let myBigInt: bigint = 243n;

const addTwo = (a : number, b : number) =>{
    return a + b;
}
console.log(addTwo(10, 20));