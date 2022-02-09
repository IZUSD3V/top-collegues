import { Component, OnInit, Input } from '@angular/core';
import { College } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues?:College[];

  constructor() { }

  ngOnInit(): void {
  }

}
