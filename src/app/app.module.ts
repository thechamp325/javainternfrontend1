﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';;
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { ReportComponent } from './report/report.component';
import { RegComponent } from './reg/reg.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { NewRegUserComponent } from './new-reg-user/new-reg-user.component';
import { PdfComponent } from './pdf/pdf.component';
import { SalaryComponent } from './salary/salary.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConfirmationletterComponent } from './confirmationletter/confirmationletter.component';
import { NoobjectionComponent } from './noobjection/noobjection.component';
import { ExpadrelComponent } from './expadrel/expadrel.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    routing
,
        BrowserAnimationsModule    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        FormComponent ,
        StaffComponent,
        StaffHomeComponent
,
        StaffFormComponent ,
        ReportComponent ,
        RegComponent ,
        EmpdetailComponent ,
        NewRegUserComponent,
        PdfComponent,
        SalaryComponent,
        ExperienceComponent,
        ConfirmationletterComponent,
        NoobjectionComponent,
        ExpadrelComponent],
       
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }