import { Component, OnInit } from '@angular/core';
import { CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Partial<CollegueWebApi> = {};

  constructor(private dataSrv:DataService) { }

  ngOnInit(): void {
  }


  valider(){
    this.dataSrv.creationCollegue(this.collegue).subscribe(col=>{
      this.collegue = {};
    })   
  }
}
