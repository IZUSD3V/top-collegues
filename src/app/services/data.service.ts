import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avis, CollegueWebApi, Vote, Votes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http:HttpClient) { }

  listerCollegues(): Observable<CollegueWebApi[]>{
    return this.http.get<CollegueWebApi[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  donnerAvis(collegue:CollegueWebApi, avis: Avis) : Observable<CollegueWebApi>{
    const vote:Vote = {
      pseudo: collegue.pseudo,
      avis: avis
    }
    return this.http.post<CollegueWebApi>('https://formation-angular-collegues.herokuapp.com/api/v1/votes',vote);
  }

  listerVotes(): Observable<Votes[]>{
    return this.http.get<Votes[]>('https://formation-angular-collegues.herokuapp.com/api/v1/votes');
  }

}
