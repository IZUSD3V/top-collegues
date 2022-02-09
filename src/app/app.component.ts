import { Component } from '@angular/core';
import { College } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';

  exCollegue: College = {
    pseudo: "Image 1",
    score: 0,
    photoUrl: "https://picsum.photos/1/200"
  }

  exListeCollegues: College[] = [{
    pseudo: "Image 1",
    score: 0,
    photoUrl: "https://picsum.photos/200/"
  },{
    pseudo: "Image 2",
    score: 0,
    photoUrl: "https://picsum.photos//200/"
  },
  {
    pseudo: "Image 3",
    score: 0,
    photoUrl: "https://picsum.photos/200/"
  }]
}
