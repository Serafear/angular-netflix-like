import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-netflix',
  templateUrl: './Netflix.component.html',
  styleUrls: ['./Netflix.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class NetflixComponent implements OnInit {

  constructor(private router: Router){}
  goToSignUp() {
    this.router.navigate(['/signup'])
  }

  ngOnInit(): void {}
  
}
