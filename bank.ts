export interface ITransaction {
    id: number;
    amount: number;
    types: string;
}
export type Details =[string, string];
export class Transaction implements ITransaction {
    id: number;
    amount: number;
    types: string;
    details: Details;


    constructor(id:number, amount: number, types: string, details: Details) {
        this.id=id;
        this.amount = amount;
        this.types = types;
        this.details = details;
    }
    getDetails(): string{
   return `ID: ${this.id}, Amount: ${this.amount}, Type: ${this.types}, Date: ${this.details[0]}, Note: ${this.details[1]}`;
}
}
export class OnlineTranasaction extends Transaction {
    platform: string;

    constructor(id: number, amount: number, types: string, details: Details, platform:string){
        super(id,amount, types, details);
        this.platform=platform;
    }
    getDetails(){
        return `${super.getDetails()}, Platform: ${this.platform}`;

    }
}