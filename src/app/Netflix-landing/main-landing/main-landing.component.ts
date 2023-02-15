import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NetflixComponent } from '../../Netflix-landing/Netflix.component';
import { CommonModule } from '@angular/common';
import { LangageButtonComponent } from '../../Netflix-components/langage-button.component';
import { TextTopComponent } from '../../Netflix-landing/Netflix-text-top/Text.component';
import { FormsModule } from '@angular/forms';
import { DarkLineComponent } from '../../Netflix-landing/Dark-gray-line/dark.component';
import {NetflixSecondTextComponent} from '../../Netflix-landing/Netflix-text-second/Text.component';
import {NetflixThirdTextComponent} from '../../Netflix-landing/Netflix-text-third/Text.component';
import {NetflixFourthTextComponent} from '../../Netflix-landing/Netflix-text-fourth/Text.component';
import {NetflixFifthTextComponent} from '../../Netflix-landing/Netflix-text-fifth/Text.component';
import {FaqComponent} from '../../Netflix-landing/FAQ/faq.component';
import {LandingFooterComponent} from '../../Netflix-landing/Landing-footer/footer.component';




@Component({
  selector: 'app-main-fr',
  templateUrl: './main-landingfr.component.html',
  styleUrls: ['./main-landingfr.component.css'],
  standalone: true,
  imports: [RouterModule, NetflixComponent, CommonModule, LangageButtonComponent, TextTopComponent, FormsModule, DarkLineComponent, NetflixSecondTextComponent, NetflixThirdTextComponent, NetflixFourthTextComponent, NetflixFifthTextComponent, FaqComponent, LandingFooterComponent],
})
export class MainFrComponent {
  constructor(private router: Router) {}

}
