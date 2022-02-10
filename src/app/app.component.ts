import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';

  exCollegue: Collegue = {
    pseudo: "Image 1",
    score: 0,
    photoUrl: "https://picsum.photos/10/200/200"
  }

  exListeCollegues: Collegue[] = [{
    pseudo: "Image 1",
    score: 1000,
    photoUrl: "https://picsum.photos/id/10/200/200/"
  },{
    pseudo: "Image 2",
    score: 0,
    photoUrl: "https://picsum.photos/id/100/200/200/"
  },
  {
    pseudo: "Image 3",
    score: 0,
    photoUrl: "https://picsum.photos/id/1000/200/200/"
  },
  {
    pseudo: "Image 4",
    score: 0,
    photoUrl: "https://picsum.photos/id/1004/200/200/"
  },
  {
    pseudo: "Image 5",
    score: 0,
    photoUrl: "https://picsum.photos/id/1008/200/200/"
  },
  {
    pseudo: "Image 6",
    score: 0,
    photoUrl: "https://picsum.photos/id/1014/200/200/"
  }]
}
