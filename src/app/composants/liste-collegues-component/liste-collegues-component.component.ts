import { Component, OnInit, Input } from '@angular/core';
import { College } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

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
