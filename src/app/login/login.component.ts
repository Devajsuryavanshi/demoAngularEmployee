import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../entity/user';
import { EmployeeService } from '../service/employee.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:UserService, private router: Router, 
    private appComponent:AppComponent, private employeeServ:EmployeeService) { }

  isFormValid: boolean = true;
  isCredentialValid:boolean = true;

  ngOnInit(): void {
    this.appComponent.LoggedInCheck();
  }

  onSubmit(logInForm: NgForm){
    const userData = new User(logInForm.value.UserName,
      logInForm.value.Password);
      if(!logInForm.valid){
        this.isFormValid = false;
      }
    this.authService.authenticate(userData).subscribe(data=>{
      
      this.authService.isAuthenticated = data;
      console.log(data);
      if(this.authService.isAuthenticated == false){
        this.isCredentialValid = false;
      }
      else{
        this.authService.isAuthenticated = true;
          this.authService.isEmployee = true;
          this.appComponent.setEmail(userData.email);
          this.employeeServ.getEmployeeByEmail(userData.email).subscribe(data=>{
            this.authService.userName = data.name;
            this.appComponent.userName = data.name;
          });
          this.appComponent.checkAuth();
          this.router.navigate(['employee']);
        }

    });

  }

}
