import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetflixComponent } from './Netflix/Netflix.component';
import { CommonModule } from '@angular/common';
import { LangageButtonComponent } from './Netflix-components/langage-button.component';
import { TextTopComponent } from './Netflix/Netflix-text-top/Text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NetflixComponent, CommonModule, LangageButtonComponent, TextTopComponent],
})
export class AppComponent {
  title = 'angular-standalone-components-example';

}
