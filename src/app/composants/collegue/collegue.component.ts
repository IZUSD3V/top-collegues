import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avis, CollegueWebApi } from 'src/app/models';
import { ScorePipe } from 'src/app/pipes/score.pipe';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue?: CollegueWebApi;
  
  scorePipe:ScorePipe = new ScorePipe();
  btnAimerDesactiver = false;
  btnDetesterDesactiver = false;
  afficherErreur = true;
  msgErreur = "";

  constructor(private dataSrv: DataService, private router: Router) {}
  
  ngOnInit(): void {
    if(!this.collegue){
      this.msgErreur = "Un collègue est nécessaire...";
      this.afficherErreur = false;
    }else{
      this.affichageBtn();
    }
  }

  selectionEvent(selection:Avis){
    if(this.collegue){
      // (selection==='AIMER') ? this.college.score += 100 : this.college.score -= 100;

      this.dataSrv.donnerAvis(this.collegue,selection).subscribe(col=>{
        console.log(col);
        if(this.collegue) this.collegue.score = col.score;
        this.affichageBtn();
      });
      
    }
  }
  
  affichageBtn(){
    if(this.collegue){
      this.btnAimerDesactiver = (this.collegue.score >= 1000) ? true : false;
      this.btnDetesterDesactiver = (this.collegue.score <= -1000) ? true : false;
    }
  }

  afficherDetail(pseudo:string){
    this.router.navigate(['/detail/',{pseudo:pseudo}]);
  }

}
