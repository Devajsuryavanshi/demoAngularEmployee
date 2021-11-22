import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Consultancy';
  private isAutheticated:boolean = false;
  userName!:String;
  private email!:String;

  constructor(private authServ:UserService, private router:Router){}

  ngOnInit(): void {
  }

  LoggedInCheck(){
    if(this.isAutheticated){
      this.router.navigate(['employee']);
    }
  }

  checkAuth():void{
    if(this.authServ.isAuthenticated){
      this.isAutheticated = true;
    }
  }

  getAuth(){
    return this.isAutheticated;
  }

  setEmail(email:String){
    this.email = email;
  }

  getEmail(){
    return this.email;
  }
}
