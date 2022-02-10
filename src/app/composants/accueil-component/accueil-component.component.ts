import { Component, Input, OnInit, Query, QueryList, ViewChild } from '@angular/core';
import { Collegue } from 'src/app/models';
import { ListeColleguesComponentComponent } from '../liste-collegues-component/liste-collegues-component.component';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
