import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({providedIn: 'root'})
export class HelperService {
 
    taskId : Number = 0;
  url = "http://localhost:3000";
// url = "http://dummy.restapiexample.com/api/v1";
 
  constructor(private http: HttpClient) {
    
  }
  getTasks() {
    return this.http.get(this.url+'/tasks');
  }

  addTasks(data) {
    return this.http.post(this.url+'/addTask', data);
  }

  updateTask(data) {
    return this.http.post(this.url+'/updateTask', data);
  }
}