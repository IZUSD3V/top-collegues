import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { ListeColleguesComponentComponent } from './composants/liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './composants/accueil-component/accueil-component.component';
import { ScorePipe } from './pipes/score.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HistoriqueVotesComponent } from './composants/historique-votes/historique-votes.component';
@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponentComponent,
    ScorePipe,
    HistoriqueVotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
