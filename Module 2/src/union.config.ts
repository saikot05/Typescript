// Literal type

type Status = "pending"

const status : Status = "pending"

console.log(status)

// Basic Union

type Identity = string | number

const id1 : Identity = 123
const id2 : Identity = "123"

console.log(id1)
console.log(id2)

// Literal Union

type Role = "admin" | "user" | "super-admin"

const userRole : Role = "admin"

console.log(userRole)

// Object Union

type Admin = {
    id: number,
    role: "admin",
    privileges: string[]
}

type Member = {
    id: number,
    role: "user",
    plans: []
}

type User = Admin | Member

const user1 : User = {
    id: 1,
    role: "admin",
    privileges: ["create", "update", "delete"]
}

console.log(user1)