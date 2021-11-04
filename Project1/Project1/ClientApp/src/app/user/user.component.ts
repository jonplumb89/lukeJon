import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'oidc-client';
import { AspNetUserService } from '../asp-net-user.service';
import { AspNetUser } from '../Models/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: AspNetUser[];
  constructor(private router: Router, private aspNetUserService: AspNetUserService) { this.aspNetUserService = aspNetUserService }

  //user from user component as login user


  ngOnInit() {
    if (!window.localStorage.getItem('user')) {
      this.aspNetUserService.getAspNetUsers()
      console.log(window.localStorage.getItem('user'))
    } else {
      this.router.navigateByUrl('/home');
    }

  }

  login(user) {
    this.router.navigateByUrl('/home');
  }

  //ngOnInit() {
  //  this.aspNetUserService.getAspNetUsers()
  //    .subscribe(result => {
  //      this.users = result;
  //    })
  

}
