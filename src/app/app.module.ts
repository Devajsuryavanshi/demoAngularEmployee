import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { EmployeeAppComponent } from './employee-app/emoloyee-app.component';
import { SkillComponent } from './skill/skill.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddCertComponent } from './add-cert/add-cert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    EmployeeAppComponent,
    SkillComponent,
    CertificateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddSkillComponent,
    AddCertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
