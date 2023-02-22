import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer.component';
import { TopBandComponent } from '../Wtkm-topBand/top-band.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pageTwo',
  templateUrl: './PageTwo.component.html',
  styleUrls: ['./PageTwo.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent, TopBandComponent, CommonModule],
})
export class PageTwoComponent implements OnInit {
  /*constructor(private router: Router) {}*/

  ngOnInit(): void { this.offersElement = this.el.nativeElement.querySelector('.Offers');}
  isExtraColVisible = false;

  toggleExtraCol() {
    this.isExtraColVisible = !this.isExtraColVisible;
  }
  isFixed = false;

  private offersElement: HTMLElement;
  constructor(private router: Router, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const distanceFromTop = this.offersElement.getBoundingClientRect().top;

    if (distanceFromTop < 16) { // 1rem = 16px
      this.offersElement.classList.add('fixed');
    } else {
      this.offersElement.classList.remove('fixed');
    }
  }
}