import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../entity/employee';
import { Skill } from '../entity/skill/skill';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  employee!:Employee;
  skill:Skill = new Skill();

  constructor(private employeeService:EmployeeService, private router: Router,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.getEmployeeByEmail();
  }

  submitSkill():void{
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio, this.employee.id);
    this.skill.setEmployee(emp);
    this.employeeService.addSkill(this.skill).subscribe(data=>{
      this.router.navigate(['']);
    }, (error)=>{alert("Error, Invalid input");});
  }

  getEmployeeByEmail(){
    let email = this.appComponent.getEmail();
    if(email == null){
      this.router.navigate(['']);
    }
    else{
      this.employeeService.getEmployeeByEmail(email).subscribe(data=>{
        this.employee = data;
      });
    }
  }

}
