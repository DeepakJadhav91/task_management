import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'taskDetails', component: TaskDetailsComponent },
  { path: 'addTask', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
