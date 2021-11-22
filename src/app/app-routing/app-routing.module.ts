import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCertComponent } from '../add-cert/add-cert.component';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { AuthGuard } from '../auth.guard';
import { CertificateComponent } from '../certificate/certificate.component';
import { EmployeeAppComponent } from '../employee-app/emoloyee-app.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { SkillComponent } from '../skill/skill.component';

const routes: Routes = [
 {path: 'employee', component:EmployeeAppComponent, canActivate:[AuthGuard]},
 {path: '', component:LoginComponent},
 {path:'register', component:RegisterComponent},
 {path:'employee/skills', component:SkillComponent, canActivate:[AuthGuard]},
 {path:'employee/addSkill', component:AddSkillComponent, canActivate:[AuthGuard]},
 {path:'employee/addCert', component:AddCertComponent, canActivate:[AuthGuard]},
 {path:'employee/certificates', component:CertificateComponent, canActivate:[AuthGuard]},
 {path:'employee/profile', component:ProfileComponent, canActivate:[AuthGuard]},
 {path:'addSkill', component:AddSkillComponent, canActivate:[AuthGuard]},
 {path:'addCert', component:AddCertComponent, canActivate:[AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }