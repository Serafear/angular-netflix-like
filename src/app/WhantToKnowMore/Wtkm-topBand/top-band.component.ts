import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-topBand',
  templateUrl: './top-band.component.html',
  styleUrls: ['./top-band.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class TopBandComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}