import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Avis, Collegue, CollegueWebApi, Vote, Votes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private obsCollegues = new Subject<CollegueWebApi[]>();
  private obsVotes = new Subject<Votes[]>();
  
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http:HttpClient) { }


  fluxCollegues(): Observable<CollegueWebApi[]> {
    return this.obsCollegues.asObservable();
  }

  fluxVotes(): Observable<Votes[]>{
    return this.obsVotes.asObservable();
  }

  detailCollegue(pseudo:string): Observable<CollegueWebApi>{
    return this.http.get<CollegueWebApi>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues/'+pseudo+'/');
  }

  listerCollegues(): Observable<CollegueWebApi[]>{
    return this.http.get<CollegueWebApi[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  creationCollegue(collegue:Partial<CollegueWebApi>) : Observable<CollegueWebApi>{
    return this.http.post<CollegueWebApi>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues',collegue);
  }

  donnerAvis(collegue:CollegueWebApi, avis: Avis) : Observable<CollegueWebApi>{
    return this.http.post<CollegueWebApi>('https://formation-angular-collegues.herokuapp.com/api/v1/votes',{
      pseudo: collegue.pseudo,
      avis: avis
    });
  }

  listerVotes(): Observable<Votes[]>{
    return this.http.get<Votes[]>('https://formation-angular-collegues.herokuapp.com/api/v1/votes');
  }

  actualiser(){
    this.listerCollegues().subscribe(collegues=>{
      this.obsCollegues.next(collegues);
    }) 

    this.listerVotes().subscribe(votes=>{
      this.obsVotes.next(votes);
    })
  }

}
