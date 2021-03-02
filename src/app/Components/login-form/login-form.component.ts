import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { LoginApiService } from 'src/app/Services/login-api.service';
import { IUsers } from 'src/app/ViewModels/iusers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  users:IUsers[]=[];
  user:IUsers={username:'',password:0};
  guid:Guid;
  constructor(private userService: LoginApiService) {
    this.guid=Guid.create();
   }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.users=response;
      },
      (err)=>{console.log(err)}
    );
    console.log(this.users);
  }

  login(){
    this.userService.getAllUsers().subscribe(
      (response)=>{
        //console.log("in subscribe");
        this.users=response;
      },
      (err)=>{console.log(err)}
    );
    console.log(this.users);

    for(var i=0;i<this.users.length;i++){
      if(this.user.username==this.users[i].username || this.user.password==this.users[i].password){
        console.log("Authinticated successfully "+this.users[i].username +", "+this.users[i].password);
        this.guid=Guid.create();
        localStorage.setItem('current user',JSON.stringify(this.guid));
        console.log("ID = "+this.guid);
        
        break;
      }
      else{
        console.log("Inavlid Authintication ");
        break;
      }
    }
  }


  }

