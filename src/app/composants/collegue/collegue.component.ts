import { Component, Input, OnInit } from '@angular/core';
import { Avis, College } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() college?: College;
  
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
    }
    

  }
  
  affichageBtn(){

    if(this.college){
      if(this.college.score >= 1000){

      } 
      
      if(this.college.score <= -1000){
  
      }
    }
  }

}
