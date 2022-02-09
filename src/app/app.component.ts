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
    photoUrl: "https://picsum.photos/200"
  }
}
