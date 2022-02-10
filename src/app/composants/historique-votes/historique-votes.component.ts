import { Component, OnInit } from '@angular/core';
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

    dataSrv.listerVotes().subscribe(liste=>{
      this.votes = liste;
    });

  }

  ngOnInit(): void {
  }

}
