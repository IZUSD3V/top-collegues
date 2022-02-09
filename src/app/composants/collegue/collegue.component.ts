import { Component, Input, OnInit } from '@angular/core';
import { Avis, College } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() college?: College;
  
  btnAimerDesactiver = false;
  btnDetesterDesactiver = false;
  afficherErreur = true;
  msgErreur = "";

  constructor() { 

    

  }

  ngOnInit(): void {
    if(!this.college){
      this.msgErreur = "Un collègue est nécessaire...";
      this.afficherErreur = false;
    }
  }


  selectionEvent(selection:Avis){

    if(this.college){
      if(selection==='AIMER'){
        this.college.score += 100;
      }else{
        this.college.score -= 100;
      }
      this.affichageBtn();
    }
  }
  
  affichageBtn(){

    if(this.college){
      if(this.college.score >= 1000){
        this.btnAimerDesactiver = true;
      } else{
        this.btnAimerDesactiver = false;
      }
      
      if(this.college.score <= -1000){
        this.btnDetesterDesactiver = true;
      } else{
        this.btnDetesterDesactiver = false;
      }
    }
  }

}
