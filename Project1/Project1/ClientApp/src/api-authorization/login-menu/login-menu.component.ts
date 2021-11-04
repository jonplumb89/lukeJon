import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  public use : any

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.authorizeService.getUser().subscribe(used => {
      this.use = used;
      this.authorizeService.user = used;
      //window.localStorage.setItem('user', used);
    });
  }

  //getTheUser() {
  //  let x =this.userName.subscribe(used => {
  //    this.use = used;
  //    console.log(used);
  //  });
  //  return x;
  //}
}
