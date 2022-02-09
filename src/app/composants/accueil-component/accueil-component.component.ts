import { Component, Input, OnInit } from '@angular/core';
import { College } from 'src/app/models';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {

  @Input() collegues?:College[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
