import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  opened = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('loginForm');
    this.router.navigate(['']);
  }

}
