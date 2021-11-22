import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skill } from '../entity/skill/skill';
import { Certificate } from '../entity/certificate/certificate';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/employees";

  getEmployeeList(): Observable<Employee[]>{
    const header = new HttpHeaders({Autherization:'Basic '+btoa("Anuj:123aj321")}).set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Employee[]>(this.baseUrl,{'headers':header});
  }

  getEmployeeByEmail(email:String): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+'/'+email);
  }

  postEmployee(emp:Employee):Observable<Response>{
    if(emp.id == undefined)
    return this.httpClient.post<Response>(this.baseUrl, emp);
    else
    return this.httpClient.put<Response>(this.baseUrl, emp);
  }

  deleteSkillById(id:number):Observable<Response>{
    return this.httpClient.delete<Response>(this.baseUrl + '/skill/' + id);
  }

  addSkill(skill:Skill):Observable<Response>{
      return this.httpClient.post<Response>(this.baseUrl +'/skill', skill);
    }

  addCertificate(certificate:Certificate):Observable<Response>{
      return this.httpClient.post<Response>(this.baseUrl+'/certificate', certificate);
    }
  
  deleteCertById(id:number):Observable<Response>{
      return this.httpClient.delete<Response>(this.baseUrl + '/certificate/' + id);
  }

  deleteEmployeebyId(id:number):Observable<Response>{
    return this.httpClient.delete<Response>(this.baseUrl + '/' + id);
  }
}
