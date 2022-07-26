import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:4000/table');
  }
}
