import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer2.component'

@Component({
  selector: 'app-pageOne',
  templateUrl: './pageOne.component.html',
  styleUrls: ['./pageOne.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent],
})
export class PageOneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}