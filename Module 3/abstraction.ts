//? Abstraction -> every employee must define how their pay is calculated

abstract class Employe {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }
    get baseSalary(): number{
        return this._baseSalary;
    }
    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
    abstract calculatePay(): number;
} 

class Maneger extends Employe{
    calculatePay(){
        return this.baseSalary + 5000;
    }
}

class Developers extends Employe{ 
    calculatePay(){
        return this.baseSalary + 3000;
    }
}