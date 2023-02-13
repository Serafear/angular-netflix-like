import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pageOne',
  templateUrl: './pageOne.component.html',
  styleUrls: ['./pageOne.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class PageOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}