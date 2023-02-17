import { Component, ViewEncapsulation } from '@angular/core';
import { LangageButtonComponent } from '../../Netflix-components/langage-button.component'


@Component({
  selector: 'app-wtkm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [LangageButtonComponent ],
  encapsulation:
    ViewEncapsulation.None /*this allow me to use ng-container*/,
})
export class WtkmFooterComponent {

}