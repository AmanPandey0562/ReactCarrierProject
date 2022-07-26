import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClusterServiceService {

  url: string = 'http://localhost:4000/cluster'
  constructor(private http:HttpClient) { }

  sendClusterData(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }

  getClusterData():Observable<any>{
    return this.http.get<any>(this.url)
  }
}

