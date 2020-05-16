import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../datajson.service'
import { User } from '../user';
@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router,private json : DataService) { }
  users$:User[];

  loginWithGoogle(){
      this.auth.googleLogin().then(res => {
        this.router.navigate(['store'])
      })
    }
    getData() {
      this.json.getUsers().subscribe(data => {
        this.users$ = data
        this.users$=window.JSON.parse(window.localStorage.getItem(`Edited list`));
      })
    }
  ngOnInit():any {
    this.getData()
  }

}
//import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
//import { Router } from '@angular/router';
//
//@Component({
//  selector: 'app-store-data',
//  templateUrl: './store-data.component.html',
//  styleUrls: ['./store-data.component.css']
//})
//export class StoreComponent implements OnInit {
//
//  constructor(private auth:AuthService, private router:Router) { }
//  
//  loginWithGoogle(){
//    this.auth.googleLogin().then(res => {
//      this.router.navigate(['store'])
//    })
//  }
//
//  ngOnInit(): void {
//  }
//
//}