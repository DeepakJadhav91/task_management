import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../_service/helper.service';
import { Task } from '../models/Task'
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers:[HelperService]
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  tasks : Task[];
  taskId: Number = 0;
  isLoggedUser: Boolean = false;
  constructor(private formBuilder: FormBuilder, public http: HttpClient, private helperService: HelperService,private router: Router, private appComp: AppComponent) {
    if(!localStorage.getItem('logged')) {
      this.isLoggedUser = false;
    } else {
      this.isLoggedUser = true;
    }
   }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      title: ['', Validators.required],
      details: ['', Validators.required],
      dueDate: ['', Validators.required],
      completedDate: ['', Validators.required]
    });
  }
  get f() { return this.addTaskForm.controls; }
  navigatePage(page) {
    // this.router.navigateByUrl('/'+page);
    this.router.navigate([page]);
  }
  addTasks(form) {
    this.submitted = true;
    if (this.addTaskForm.invalid) {
      return;
  }
    var body= {
      "id": +this.appComp.taskId + 1,
      "title": form.value.title,
      "details": form.value.details,
      "dueDate": form.value.dueDate,
      "completedDate": form.value.completedDate
      }
      this.loading = true;
      this.helperService
      .addTasks(body)
      .subscribe((data:Task[]) => {
        console.log(data);
        this.tasks = data;
        this.submitted = false;
        // setTimeout(function(){
          // this.navigatePage('taskDetails');
          // this.router.navigateByUrl('/taskDetails');
          this.router.navigate(['taskDetails']);
      // },1000);
      });
  }

}
