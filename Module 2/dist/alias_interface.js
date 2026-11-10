//Interface is generally used to define the structure of an object. It can be used to define the shape of an object, including its properties and methods. Interfaces are often used to define contracts for classes or objects, ensuring that they adhere to a specific structure.
const user = {
    id: 1,
    name: "John Doe",
    role: "admin"
};
const cat = {
    species: "Feline",
    bread: "Persian"
};
const car = {
    brand: "Toyota",
    model: "Camry"
};
const employee = {
    id: 1,
    name: "John Doe"
};
export {};
//! This is not valid
// type TEmployee = {
//     name: string;
// }
// type TEmployee = {
//     id: number;
// } //? This will throw an error because type alias cannot be re-declared
