import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private route: Router,
    private employeeServ:EmployeeService) { }

  isFormValid:boolean = true;
  isEmployee:boolean = false;
  isUserUnique = true;
  employee!:Employee;

  ngOnInit(): void {
  }

  setNotUnique(){
    this.isUserUnique = false;
  }

  onSubmit(logInForm: NgForm){
      if(logInForm.valid){
        
        this.employee = new Employee(logInForm.value.name,logInForm.value.email, logInForm.value.Password,
          logInForm.value.yearsOfExperience,logInForm.value.bio);
        this.employeeServ.postEmployee(this.employee).subscribe((response)=>{
          console.log(this.employee.name);
          this.route.navigate(['']);
        }, (error)=>{
          this.setNotUnique();
        });
      }
      else{
        this.isFormValid = false;
      }
    

    }

  }
