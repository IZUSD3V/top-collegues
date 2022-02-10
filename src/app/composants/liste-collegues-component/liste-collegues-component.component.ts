import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  collegues?: CollegueWebApi[];

  msgErr = "";
  afficherErr = true;
  
  constructor(private dataSrv: DataService) { 
    dataSrv.listerCollegues().subscribe(liste=>{
      this.collegues = liste;
      this.ctrlContenu();
    }); 
  }

  ngOnInit(): void {
    let btnActualiser = document.querySelector("#btn-actualiser");
    if(btnActualiser) fromEvent(btnActualiser, 'click').subscribe(e=>{
      this.updateScore();
    });
  }

  ctrlContenu(){
    if(!this.collegues || this.collegues.length == 0){
      this.msgErr = "Collègues indisponibles...";
      this.afficherErr = false;
    }
  }

  updateScore(){
    this.dataSrv.listerCollegues().subscribe(liste=>{
      liste.forEach(e=>{
        if(this.collegues){
          const c = this.collegues.find(te=>te.pseudo===e.pseudo);
          if(c && c.score != e.score) c.score = e.score;
        }        
      })  

      alert('Mise à jour des scores éffectuée !');   

    });
  }



}
