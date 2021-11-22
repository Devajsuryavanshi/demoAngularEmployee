import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public appComponent:AppComponent, private route:Router, private employeeServ:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  employee!:Employee;

  getEmployee(){
    this.employeeServ.getEmployeeByEmail(this.appComponent.getEmail()).subscribe(data=>{
      this.employee = data;
    });
  }

  update(){
    this.employeeServ.postEmployee(this.employee).subscribe(data=>{
      alert("Updated");
      this.route.navigate(['']);
    },(error)=>{
      alert("invalid");
    });
  }

  deleteEmp(){
    this.employeeServ.deleteEmployeebyId(this.employee.id);

    window.location.reload();
    }

}
