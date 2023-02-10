import { Component, OnInit } from '@angular/core';
import {DarkLineComponent} from '../Dark-gray-line/dark.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-text-fourth',
  templateUrl: './Text.component.html',
  styleUrls: ['./Text.component.css'],
  standalone: true,
  imports: [DarkLineComponent, CommonModule],
})
export class NetflixFourthTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}