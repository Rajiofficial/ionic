import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { DatasService } from '../services/datas.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

public alldata: any= null;

  register=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    confirmpassword:new FormControl('',[Validators.required]),
  });
  constructor( private service: DatasService, private route: Router) { }

 get firstname(){
  return this.register.get('firstname');
 }
 get lastname(){
  return this.register.get('lastname');
 }
 get email(){
  return this.register.get('email');
 }
 get password(){
  return this.register.get('password');
 }
 get confirmpassword(){
  return this.register.get('passwordconfirmpassword');
 }

  ngOnInit() {



    this.getmethod();
  }


  getdatas(){
    console.log(this.register.value);
    this.service.postmethod(this.register.value).subscribe(d=>console.log(d));
    this.jj();
    // this.route.navigate(['']);
    const promise=new Promise((resolve, reject) => {
      console.log('sss');
      setTimeout(()=>{
       resolve( this.getmethod());
         },1000);
        //  promise.then(s=>console.log('ssss',s));
    });


  }

    getmethod(){
      this.service.getdata().subscribe((data)  =>{
        this.alldata= data;
        console.log(this.alldata);
        this.jj();
      });
    }
  jj(){
    this.alldata.map(ss=>console.log(ss));
  }


  deletedata(id: string){
    this.service.deletemethod(id)
    .subscribe(book=>{
     this.getmethod();
    });
  }


  // -----------------editdata-------------------
  editdata(id: string){
    this.route.navigate(['edit']);
  }

}
