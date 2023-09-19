import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://127.0.0.1:8000/api/login_check"
  constructor(
  private http: HttpClient
  ) { }


  login(credentials:any){
    return this.http.post<ICredentials>(this.url, credentials);

  }


}


