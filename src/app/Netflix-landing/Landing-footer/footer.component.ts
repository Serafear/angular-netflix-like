import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangageButtonComponent } from '../../Netflix-components/langage-button.component'

@Component({
  selector: 'app-footerldn',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule, LangageButtonComponent],
  encapsulation:
    ViewEncapsulation.None /*this allow me to use ng-container*/,
})
export class LandingFooterComponent {
  
}