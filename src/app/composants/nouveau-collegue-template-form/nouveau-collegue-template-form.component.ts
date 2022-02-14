import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegueWebApi } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Partial<CollegueWebApi> = {};
  
  constructor(private dataSrv:DataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  valider(form: NgForm){
    this.dataSrv.creationCollegue(this.collegue).subscribe({
      next: col=>{
        this.router.navigate(['/accueil'])
      },
      error: (err)=>{
        console.log(err);
        
        alert('Une erreur est survenue lors de l\'enregistrement du collègue...');
      }
    })   
  }
}
