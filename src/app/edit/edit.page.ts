import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { DatasService } from '../services/datas.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
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
return this.register.get('firstnam');
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
  this.route.navigate(['']);


 setTimeout(()=>{
  this.getmethod();
 },1000);
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

update(){
  console.log('dfdf');
}


// -----------------editdata-------------------


}

