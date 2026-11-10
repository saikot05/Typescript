//Object type
// const user:{
//     name:string;
//     age:number;
//     isActive:boolean;
//     action: () => void;
//     badges: string[];
// } = {
//     name: "Saikot",
//     age: 22,
//     isActive: true,
//     action: () => {
//     console.log("User action performed");
//     },
//     badges: ["Beginner", "Intermediate"]
// };

// type alias
type TUser = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
};

const user: TUser = {
    name: "Saikot",
    age: 22,
    isActive: true,
    action: () => {
        console.log("User action performed");
    },
    badges: ["Beginner", "Intermediate"]
}

//user.email = "saikot@example.com"; // Error: Property 'email' does not exist on type 'TUser'.

//interface
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}

const myuser: IUser = {
    name: "Saikot",
    age: 22,
    isActive: true,
    action: () => {
        console.log("User action performed");
    },
    badges: ["Beginner", "Intermediate"]
}

//nested object type
type Address = {
    street: string;
    city: string;
    country: string;
}
type TUserWithAddress = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address: Address;
};
