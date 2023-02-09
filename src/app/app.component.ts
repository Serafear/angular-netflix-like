import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetflixComponent } from './Netflix/Netflix.component';
import { CommonModule } from '@angular/common';
import { LangageButtonComponent } from './Netflix-components/langage-button.component';
import { TextTopComponent } from './Netflix/Netflix-text-top/Text.component';
import { FormsModule } from '@angular/forms';
import { DarkLineComponent } from './Netflix/Dark-gray-line/dark.component';
import {NetflixSecondTextComponent} from './Netflix/Netflix-text-second/Text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NetflixComponent, CommonModule, LangageButtonComponent, TextTopComponent, FormsModule, DarkLineComponent, NetflixSecondTextComponent],
})
export class AppComponent {
  title = 'angular-standalone-components-example';

}
