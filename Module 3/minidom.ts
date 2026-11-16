abstract class UIElements {
    constructor(protected id: string){}
    abstract render(): string;
}

class Input extends UIElements{
    constructor(id: string, private type: string, private placeholder: string){
        super(id);
    }
    render(){
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
    }
}

const emailInput = new Input("email", "email","enter your email");