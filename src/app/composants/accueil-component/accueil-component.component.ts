import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {

  @Input() collegues?:Collegue[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
