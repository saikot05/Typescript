//* type assertion
//* "as" syntax

type Status = "success" | "failure";

const status1: string = "pending";
const showStatus = (status: Status)=>{
    console.log(`Status is ${status}`);
}

showStatus(status1 as Status); // Type assertion using "as" syntax