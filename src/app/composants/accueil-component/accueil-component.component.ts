import { Component, Input, OnInit } from '@angular/core';
import { College } from 'src/app/models';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {

  @Input() collegues?:College[];
  msgErr = "";
  afficherErr = true;

  constructor() { }

  ngOnInit(): void {
    if(!this.collegues || this.collegues.length == 0){
      this.msgErr = "Collègues disponibles...";
      this.afficherErr = false;
    }
  }

}
