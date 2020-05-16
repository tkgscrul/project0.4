import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../datajson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private dataService : DataService , private router:Router,private json:DataService) { }
  users$:User[];
  logout(){
    this.router.navigate([''])
  }
  edit(){
    this.router.navigate(['edit'])
  }
  getData() {
    this.json.getUsers().subscribe(data => {
      this.users$ = data
      this.users$=window.JSON.parse(window.localStorage.getItem(`Edited list`));
    })
  }

  ngOnInit(): any {
    this.getData()
    
  }
}
