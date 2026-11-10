//Interface is generally used to define the structure of an object. It can be used to define the shape of an object, including its properties and methods. Interfaces are often used to define contracts for classes or objects, ensuring that they adhere to a specific structure.

//Alias is a way to create a new name for an existing type. It can be used to create a more descriptive name for a type, or to create a new type that is based on an existing type. Aliases are often used to simplify complex types or to create more readable code.

type id = number;

//Interface Example
interface User {
    id: id;
    name: string;
    role: "admin" | "user" | "super-admin";
}

const user : User ={
    id: 1,
    name: "John Doe",
    role: "admin"
}

// alias use for union,type,primitive type, literal type, object type, array type, tuple type, function type, class type, enum type, any type, unknown type, never type, void type, null type, undefined type

// interface use for object type, class type, function type, array type, tuple type, enum type, any type, unknown type, never type, void type, null type, undefined type

//TODO:interface

interface Animal {
    species: string;
}

interface Cat extends Animal {
    bread: string;
}

const cat : Cat = {
    species: "Feline",
    bread: "Persian"
}

//TODO:alias

type Vehicle = {
    brand: string;
}

type Car = Vehicle & { //? "&" symbol is used to perform intersection 
    model: string;
}

const car : Car = {
    brand: "Toyota",
    model: "Camry"
}

interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}

const employee : IEmployee = {
    id: 1,
    name: "John Doe"
}

//! This is not valid
// type TEmployee = {
//     name: string;
// }
// type TEmployee = {
//     id: number;
// } //? This will throw an error because type alias cannot be re-declared