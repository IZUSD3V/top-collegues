import {Routes} from '@angular/router';
import { AccueilComponentComponent } from './composants/accueil-component/accueil-component.component';
import { FicheCollegueComponent } from './composants/fiche-collegue/fiche-collegue.component';
import { NouveauCollegueTemplateFormComponent } from './composants/nouveau-collegue-template-form/nouveau-collegue-template-form.component';

export const ROUTES: Routes = [
    {path: 'accueil', component: AccueilComponentComponent},
    {path: 'form', component: NouveauCollegueTemplateFormComponent},
    {path: 'detail', component: FicheCollegueComponent},
    {path:'', pathMatch: 'full', redirectTo: '/accueil'}
]