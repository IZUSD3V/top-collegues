import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from 'src/app/models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() selectionEvt = new EventEmitter<Avis>();
  @Input() aimerActif:boolean = false;
  @Input() detesteActif:boolean = false;
  // aimerActif = false;
  // detesteActif = false;

  constructor() { }

  ngOnInit(): void {
  }

  selection(valeur:boolean){
    if(valeur){
      this.selectionEvt.emit(Avis.AIMER);
    }else{
      this.selectionEvt.emit(Avis.DETESTER);
    }
    
  }

  // affichageBtn(btn:string){
  //   switch (btn) {
  //     case "DETESTER":
  //       this.detesteActif = !this.detesteActif;
  //       break;
    
  //     default:
  //       this.aimerActif = !this.aimerActif;
  //       break;
  //   }
  // }

}
