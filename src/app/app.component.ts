import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NetflixComponent} from './Netflix/Netflix.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NetflixComponent],
})
export class AppComponent {
  title = 'angular-standalone-components-example';
}
