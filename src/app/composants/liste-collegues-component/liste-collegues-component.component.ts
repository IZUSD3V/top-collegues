import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  collegues!: Observable<CollegueWebApi[]>;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.collegues = this.dataSrv.fluxCollegues();
    this.dataSrv.actualiser();
  }

}
