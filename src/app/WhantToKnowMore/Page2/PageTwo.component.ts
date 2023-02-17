import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer.component';
import { TopBandComponent } from '../Wtkm-topBand/top-band.component';


@Component({
  selector: 'app-pageTwo',
  templateUrl: './PageTwo.component.html',
  styleUrls: ['./PageTwo.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent, TopBandComponent],
})
export class PageTwoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}