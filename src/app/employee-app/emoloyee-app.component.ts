import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Certificate } from '../entity/certificate/certificate';
import { Employee } from '../entity/employee';
import { Skill } from '../entity/skill/skill';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-app',
  templateUrl: './employee-app.component.html',
  styleUrls: ['./emoloyee-app.component.css']
})
export class EmployeeAppComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router, private appComponent:AppComponent) { }

  employees!: Employee[];
  employee!:Employee;
  seeEmployee!:Employee;

  certificate: Certificate = new Certificate();
  skill: Skill = new Skill();
  skills!: Skill[];
  certificates!: Certificate[];

  private getEmployees(){
    this.service.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }
  ngOnInit(): void {
    this.getEmployees();
    this.getSkillsAndCertificates();
  }

  // Below this contains Skill Handling and Certificate Handling.

  getSkillsAndCertificates():void{
    this.service.getEmployeeByEmail(this.appComponent.getEmail()).subscribe(
      data=>{
        this.employee = data;
        this.seeEmployee = data;
        this.skills = data.skills;
        this.certificates = data.certificates;
      }
    )
  }

  viewEmployee(email:String){
    this.service.getEmployeeByEmail(email).subscribe(data=>{
      this.seeEmployee = data;
    });
  }

}
