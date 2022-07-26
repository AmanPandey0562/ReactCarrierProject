import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffManagementService {

  url : string = 'http://localhost:4000/staffManagement'
  constructor(private http:HttpClient) { }

  getStaffManagementData(){
    return this.http.get(this.url)
  }
  getStaffManagementDataId(id:number){
    return this.http.get(`${this.url}/${id}`)
  }

  sendStaffData(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }
}
