import { Component, OnInit, Input } from '@angular/core';
import { CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  //@Input() collegues?:Collegue[];

  collegues?: CollegueWebApi[];

  msgErr = "";
  afficherErr = true;
  
  constructor(private dataSrv: DataService) { 
    dataSrv.listerCollegues().subscribe(liste=>{
      this.collegues = liste;
    });
  }

  ngOnInit(): void {
    // if(!this.collegues || this.collegues.length == 0){
    //   this.msgErr = "Collègues indisponibles...";
    //   this.afficherErr = false;
    // }
  }

}
