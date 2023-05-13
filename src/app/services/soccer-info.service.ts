import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoccerInfoService {

  constructor( private http: HttpClient ) { }

  

  // getSoccerInfo(){
  //   return this.http.get( env.baseUrl  )
  // }
}
