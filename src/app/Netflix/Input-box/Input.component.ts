import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css'],
  standalone: true,
  imports: [],
})
export class InputBoxComponent implements OnInit {

  ngOnInit(): void {}

  constructor() {}

  onFocus(input: HTMLInputElement) {
    input.classList.add('focused');
  }

  onBlur(input: HTMLInputElement) {
    input.classList.remove('focused');
  }
}
