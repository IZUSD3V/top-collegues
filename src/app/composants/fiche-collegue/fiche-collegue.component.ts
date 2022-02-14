import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue, CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fiche-collegue',
  templateUrl: './fiche-collegue.component.html',
  styleUrls: ['./fiche-collegue.component.scss']
})
export class FicheCollegueComponent implements OnInit {

  pseudo:string|null = null;
  collegue?:CollegueWebApi;

  constructor(private route: ActivatedRoute, private dataSrv: DataService) { 
    this.pseudo = route.snapshot.paramMap.get('pseudo');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap)=>{
      const pseudo = p.get('pseudo');
      console.log("Nouveau pseudo : "+pseudo);
      if(pseudo !== null) this.dataSrv.detailCollegue(pseudo).subscribe(c=>this.collegue = c);
    })
  }

}
