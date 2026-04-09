// Interface for common patient details
interface PatientInfo
{
    patientID:number;
    name:string;
    diagnosis:string;
    patientType:string;
}

// Base Patient Class
class Patient implements PatientInfo
{
    patientID:number;
    name:string;
    diagnosis:string;
    patientType:string;

    constructor(id:number,name:string,diagnosis:string,type:string)
    {
        this.patientID=id;
        this.name=name;
        this.diagnosis=diagnosis;
        this.patientType=type;
    }

    admit():void
    {
        console.log(this.name,"is admitted");
    }

    discharge():void
    {
        console.log(this.name,"is discharged");
    }

    generateBill():number
    {
        return 0;
    }

}

// InPatient class
class InPatient extends Patient
{
    roomCharge:number;
    days:number;

    constructor(id:number,name:string,diagnosis:string,roomCharge:number,days:number)
    {
        super(id,name,diagnosis,"InPatient");
        this.roomCharge=roomCharge;
        this.days=days;
    }

    generateBill():number
    {
        return this.roomCharge*this.days;
    }
}

// OutPatient class
class OutPatient extends Patient
{
    consultationFee:number;

    constructor(id:number,name:string,diagnosis:string,fee:number)
    {
        super(id,name,diagnosis,"OutPatient");
        this.consultationFee=fee;
    }

    generateBill():number
    {
        return this.consultationFee;
    }
}

// Emergency Patient class
class EmergencyPatient extends Patient
{
    emergencyCharge:number;

    constructor(id:number,name:string,diagnosis:string,charge:number)
    {
        super(id,name,diagnosis,"Emergency");
        this.emergencyCharge=charge;
    }

    generateBill():number
    {
        return this.emergencyCharge;
    }
}

// Creating patients
let p1=new InPatient(101,"Ravi","Surgery",5000,3);

let p2=new OutPatient(102,"Meena","Fever",800);

let p3=new EmergencyPatient(103,"Kumar","Accident",7000);

// Operations
p1.admit();
console.log("Bill:",p1.generateBill());
p1.discharge();

p2.admit();
console.log("Bill:",p2.generateBill());
p2.discharge();

p3.admit();
console.log("Bill:",p3.generateBill());
p3.discharge();