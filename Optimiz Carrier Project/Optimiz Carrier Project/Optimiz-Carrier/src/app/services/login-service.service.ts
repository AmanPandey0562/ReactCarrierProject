import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url : string = 'http://localhost:4000/loginData'
  constructor(private http:HttpClient) { }

  sendSignUpData(data:any):Observable<any>{
    return this.http.post<any>(this.url,data);
  }

  getLoginData():Observable<any>{
    return this.http.get<any>(this.url)
  }
}
