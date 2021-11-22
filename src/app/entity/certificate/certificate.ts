import { Employee } from "../employee";

export class Certificate {

    id!:number;
    certificateName!:String;
    certificateNumber!:String;
    authority!:String;
    certificateDescription!:String;
    employee!:Employee;

    setEmployee(emp:Employee){
        this.employee = emp;
    }
}
