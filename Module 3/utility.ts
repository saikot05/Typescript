interface User{
    id:string;
    name: string;
    email: string;
}

const updateProfile = (id: string, data: Partial<User>) =>{

};
updateProfile("adbss",{name:"Saikot"});