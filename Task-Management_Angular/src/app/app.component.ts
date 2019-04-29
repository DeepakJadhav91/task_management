import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Management';
  taskId: Number = 0;
  isLoggedUser: boolean = false;
  constructor(private router: Router) {
    if(!localStorage.getItem('logged')) {
      this.isLoggedUser = false;
    } else {
      this.isLoggedUser = true;
    }
  }
  navigatePage(page) {
    // this.router.navigateByUrl('/'+page);
    this.router.navigate([page]);
  }


  logout() {
    localStorage.removeItem('logged');
    this.router.navigateByUrl('/');
    this.isLoggedUser = false;
  }
}
