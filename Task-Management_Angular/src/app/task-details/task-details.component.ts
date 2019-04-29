import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../_service/helper.service';
import { Task } from '../models/Task'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers:[HelperService]
})
export class TaskDetailsComponent implements OnInit {

  tasks : Task[];
  editFlag: boolean =  false;
  isLoggedUser: boolean = false;
  constructor(public http: HttpClient, private helperService: HelperService,private router: Router) {
    if(localStorage.getItem('logged')) {
      this.isLoggedUser = true;
    } else {
      this.isLoggedUser = false;
    }
   }

  ngOnInit(): void {
    this.getTasks();
  }
  navigatePage(page) {
    // this.router.navigateByUrl('/'+page);
    this.router.navigate([page]);
  }
  getTasks() {
    this.helperService
    .getTasks()
    .subscribe((data:Task[]) => {
      console.log(data);
      this.tasks = data;
    });
  }

  editTask(index,task) {
    console.log(task)
    this.editFlag = true;
  }

  updateTask(index,task) {
    this.helperService
    .updateTask(task)
    .subscribe((data:Task[]) => {
      this.getTasks();
      this.editFlag = false;
    });
  }

}

