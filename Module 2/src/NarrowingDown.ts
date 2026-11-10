let x=123
console.log(typeof x);

//? Type Guard
const print = (value: string | number) => {
    if(typeof value === "string") {
        return value.toUpperCase(); 
    }
    else if(typeof value === "number") {
        return value;
    }
    else{
        return value;
    }
}

//? Truthiness

type User = {
    name: string;
    address: {
        street: string;
    }
} | null;

const loggedInUser: User = {
    name: "Saikot",
    address: {
        street: "Dhaka"
    },
};

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street); 
        return;
    }
    throw new Error("User not found");
}

// some caveat of Type Guard

// const printAll = (x: string | string[] | null) =>{
//     if(x && typeof x === "object") {
//         for(let str of x){
//             console.log(str.toUpperCase());
//         }
//     }else{
//         console.log(x);
//     }
// }
// printAll(null);

// Equality Narrowing

const compare = (x: number | string, y: number | boolean) =>{
    if(x === y) {
        console.log(x,y);
    }
}

const printAll = (x: string | string[] | null) =>{
    if(x === null){
        console.log(x);
    } else if(typeof x === "object") {
        for(let str of x){
            console.log(str);
        }
    } else {
        console.log(x);
    }
}

//? Narrowing with "in" operator

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move = (animal: Fish | Bird) => {
    if ('fly' in animal) {
        animal.fly();
        return;
    } else {
        animal.swim();
    }
}

//? Narrowing with "instanceof" operator

const date = new Date();
const error = new Error();

console.log(date instanceof Date); // true
console.log(error instanceof Error); // true

const showDate = (x: Date | string) => {
    if(x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const date = new Date(x);
    console.log(date.toISOString());
}

showDate(new Date("12-12-2022"));

// Disciminated Union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if(shape.kind === "circle") {
        console.log(shape.radius);
    }else{
        console.log(shape.sideLength);
    }
}