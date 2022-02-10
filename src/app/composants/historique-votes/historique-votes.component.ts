import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Votes } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  votes?:Votes[];
  
  constructor(private dataSrv: DataService) { 
    this.chargeDonnees();
  }

  ngOnInit(): void {
    let btnActualiser = document.querySelector("#btn-actualiser");
    if(btnActualiser) fromEvent(btnActualiser, 'click').subscribe(e=>{
      this.chargeDonnees();
    });
  }

  chargeDonnees(){
    this.dataSrv.listerVotes().subscribe(liste=>{
      this.votes = liste;
    });
  }

}
