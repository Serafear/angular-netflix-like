import { Component, OnInit } from '@angular/core';
import { InputBoxComponent } from '../Input-box/Input.component'


@Component({
  selector: 'app-text-top',
  templateUrl: './Text.component.html',
  styleUrls: ['./Text.component.css'],
  standalone: true,
  imports: [InputBoxComponent],
})
export class TextTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}