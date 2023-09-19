import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PortableInterface} from "./portable.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortableService {

  constructor(private http: HttpClient) { }

  getAllPortable(): Observable<PortableInterface[]>{
    return this.http.get<PortableInterface[]>("https://127.0.0.1:8000/api/portables");
  }

  addPortabable(portable: PortableInterface): Observable<any>{
    return this.http.post<any>("https://127.0.0.1:8000/api/portables",portable);
  }

}
