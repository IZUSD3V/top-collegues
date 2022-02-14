import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private dataSrv: DataService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return this.dataSrv.listerCollegues().pipe(
      map(t=>t.map(c=>c.pseudo)),
      map(s=>s.includes(control.value)),
      map(b=> b ? {pseudoExist: true} : null),
    );

  }

}
