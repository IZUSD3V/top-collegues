import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegueWebApi } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  listerCollegues(): Observable<CollegueWebApi[]>{
    return this.http.get<CollegueWebApi[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

}
