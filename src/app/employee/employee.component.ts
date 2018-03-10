import {Component} from "@angular/core";
import {Employee} from "./employee";

@Component({
   selector:"employee",
   templateUrl:"./employee.component.html"
})
export class EmployeeComponent{
    public employee:Employee

    constructor(){
        this.employee=new Employee("Julio Cesar","juliocesar@gmail.com","11/07/1990","Lima","999999999",5000,"Soluciones Tecnológicas");
    }
}
