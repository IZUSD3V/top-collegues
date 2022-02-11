import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Votes } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  votes!:Observable<Votes[]>;

  constructor(private dataSrv: DataService) {  }

  ngOnInit(): void {
    this.votes = this.dataSrv.fluxVotes();
    this.dataSrv.actualiser();
  }

}
