import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangageButtonComponent } from '../../Netflix-components/langage-button.component';

@Component({
  selector: 'app-wtkm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [LangageButtonComponent, CommonModule],
  encapsulation: ViewEncapsulation.None /*this allow me to use ng-container*/,
})
export class WtkmFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
