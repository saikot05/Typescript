//? 
class Employees {
    constructor(
        public name: string,
        private _baseSalary: number,
    ){}

    get baseSalary(): number{
        return this._baseSalary;
    }
    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number){
        return this.baseSalary - this.baseSalary*taxRate;
    }
}

class Managers extends Employees{
    override calculatePay(){
        return this.baseSalary + 5000;
    }
}

class Developer extends Employees{
    constructor(
        public name: string,
        _baseSalary: number,
        public type: string
    ){
        super(name, _baseSalary)
    }
}