import { Component, OnInit } from '@angular/core';
import { DataService } from '../datajson.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private json: DataService, private router: Router, private storage:StorageService) { }


  users$: User[] = [];
  editedUsers: any[] = [];
  newuserarr:string[] =[];
  // edit(){
  //   this.router.navigate(['edit'])
  // }

  getData() {
    this.json.getUsers().subscribe(data => {
      this.users$ = data
       this.users$=window.JSON.parse(window.localStorage.getItem(`Edited list`));
      
      
      // this.editedUsers =data

    })
  }
  resetUsers(){
    this.json.getUsers().subscribe(data => {
      this.users$ = data
      this.storage.keepThisInStorage('Edited list',this.users$)
      console.log(this.users$);
    })
  }
  back(){
    this.router.navigate(['store'])
  }
  
  // for (let i = 0; i < this.users$.length; i++){
  //   if (this.users$[i].id != selectednum){
  //     this.editedUsers.push(this.users$[i])
  //   }
  // }
  //for (let i = 0; i < this.users$.length; i++){
  //  this.users$[i].id = this.twoendusers$;
  //  this.twoendusers$.splice(selectednum,1);
  editUsers(selectednum) {
    selectednum =  parseInt(selectednum) +1;
   this.users$ = this.users$.filter(ele => ele.id !== selectednum);
    this.storage.keepThisInStorage('Edited list',this.users$) 
    
    
  }
toaddusers(shem, user, mail){
  this.newuserarr.push(`${shem}  ${user} ${mail}`);
  console.log(this.users$);
}
  


  ngOnInit(): any {
    this.getData();
  }
}
