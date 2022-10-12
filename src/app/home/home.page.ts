import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private http: DatasService) {}

ngOnInit(){
}

postmethod(){
  this.http.postmethod({name:'raji' ,age:22}).subscribe(d=>console.log(d));
}

delete(){
  this.http.deletemethod({id:3}).subscribe(s=>console.log(s));
}
watch(){
  this.http.getdata().subscribe(data=>console.log(data));
}






  navigate(){
  this.router.navigate(['/signin']);
  };



}
