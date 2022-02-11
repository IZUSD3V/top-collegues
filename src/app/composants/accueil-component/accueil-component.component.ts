import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HistoriqueVotesComponent } from '../historique-votes/historique-votes.component';
import { ListeColleguesComponentComponent } from '../liste-collegues-component/liste-collegues-component.component';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {

  @ViewChild(ListeColleguesComponentComponent)
  CListeCollegues?: ListeColleguesComponentComponent;

  @ViewChild(HistoriqueVotesComponent)
  CHistoriqueVotes?: HistoriqueVotesComponent;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    
  }

  actualiser(){
    // this.CListeCollegues?.updateScore();
    // this.CHistoriqueVotes?.chargeDonnees();
    this.dataSrv.actualiser();
  }

}
