//Optional parameter
const concatNames = (firstName: string, lastName?: string) =>{
    if(!lastName){
        return firstName;
    }
    return firstName + " " + lastName;
}
console.log(concatNames("Saikot")); // Saikot
console.log(concatNames("Saikot","Islam")); // Saikot Islam

//Default parameter
const greetings = (greeting:string, fullname: string):void => {
    console.log(greeting + " " + fullname);
}
//void ->return type when no return value
const greeting: (fullname: string,greeting?: string) => void = (fullname, greeting = "Hello") => {
    console.log(greeting + " " + fullname);
}

//Rest parameter
const sum = (...numbers: number[]) => {
    return numbers.reduce((total,sum) => total + sum, 0);
}

sum(1,2,3,4,5); // 15

const logUserAction = (...args: [name: string, age: number, isActive: boolean]) =>{
    const [name, age, isActive] = args;
    console.log(name + "is" + age + "years old and is" + (isActive ? "" : " not") + " active");
}

logUserAction("Saikot", 25, true); // Saikot is 25 years old and is active