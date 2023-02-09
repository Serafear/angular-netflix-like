import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-langbtn',
  templateUrl: './langage-button.component.html',
  styleUrls: ['./langage-button.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LangageButtonComponent {
  isOpen = false;
  selectedLanguage = 'Français';
  languages = ['Français', 'English', 'German', 'Spanish'];

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.isOpen = false;
  }
}
