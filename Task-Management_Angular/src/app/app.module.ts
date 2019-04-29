// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HelperService } from './_service/helper.service';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskDetailsComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HelperService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }