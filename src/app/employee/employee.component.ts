import {Component} from "@angular/core";
import {Employee} from "./employee";
import employee_mock from "./employee.mock"
@Component({
   selector:"employee",
   templateUrl:"./employee.component.html",
   styleUrls:["./employee.component.css"]
})
export class EmployeeComponent{
    public employee:Employee
    public employees:Array<Employee>
    public filter:string=""
    public keyword:string=""

    constructor(){
        console.log(employee_mock)
        this.employees=employee_mock
    }

    filter_gender(gender){
        this.filter=gender
    }
    search_name(name){
        return name.toLowerCase().indexOf(this.keyword.toLowerCase())>=0
    }
   
}
