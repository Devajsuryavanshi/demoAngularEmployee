import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from '../entity/certificate/certificate';
import { AppComponent } from '../app.component';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {
  employee!:Employee;
  certificate:Certificate = new Certificate();

  constructor(private employeeService:EmployeeService, private router: Router,
    private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.getEmployeeByEmail();
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

  submitCertificate():void{
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio, this.employee.id);
    this.certificate.setEmployee(emp);
    this.employeeService.addCertificate(this.certificate).subscribe(data=>{
      this.router.navigate(['']);
    }, (error)=>{alert("Error");
  });
  }

}
