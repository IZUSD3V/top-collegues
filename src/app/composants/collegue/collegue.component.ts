import { Component, Input, OnInit } from '@angular/core';
import { Avis, College } from 'src/app/models';
import { ScorePipe } from 'src/app/pipes/score.pipe';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() college?: College;
  
  scorePipe:ScorePipe = new ScorePipe();
  btnAimerDesactiver = false;
  btnDetesterDesactiver = false;
  afficherErreur = true;
  msgErreur = "";

  constructor() {}
  
  ngOnInit(): void {
    if(!this.college){
      this.msgErreur = "Un collègue est nécessaire...";
      this.afficherErreur = false;
    }else{
      this.affichageBtn();
    }
  }

  selectionEvent(selection:Avis){
    if(this.college){
      (selection==='AIMER') ? this.college.score += 100 : this.college.score -= 100;
      this.affichageBtn();
    }
  }
  
  affichageBtn(){
    if(this.college){
      this.btnAimerDesactiver = (this.college.score >= 1000) ? true : false;
      this.btnDetesterDesactiver = (this.college.score <= -1000) ? true : false;
    }
  }

}
