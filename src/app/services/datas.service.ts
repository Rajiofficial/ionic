import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get('https://6258573d0c918296a495a609.mockapi.io/datas');
  }

  postmethod(data: any){
    return this.http.post('https://6258573d0c918296a495a609.mockapi.io/datas',data);
  }
  putmethod(data: any){
    return this.http.post(`https://6258573d0c918296a495a609.mockapi.io/datas/`,data);
  }
  deletemethod(data: any ){
   return this.http.delete('https://6258573d0c918296a495a609.mockapi.io/datas/'+data+'');
  }
}
