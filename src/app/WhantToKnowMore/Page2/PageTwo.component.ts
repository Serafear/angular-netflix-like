import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer.component';
import { TopBandComponent } from '../Wtkm-topBand/top-band.component';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-pageTwo',
  templateUrl: './PageTwo.component.html',
  styleUrls: ['./PageTwo.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent, TopBandComponent, CommonModule],
})
export class PageTwoComponent implements OnInit {
  /*constructor(private router: Router) {}*/

  ngOnInit(): void {
    this.offersElement = this.el.nativeElement.querySelector('.Offers');
  }
  isExtraColVisible = false;

  toggleExtraCol() {
    this.isExtraColVisible = !this.isExtraColVisible;
  }
  isFixed = false;

  private offersElement: HTMLElement;
  constructor(private router: Router, private el: ElementRef) {}

}
