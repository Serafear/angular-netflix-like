import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer.component';
import { TopBandComponent } from '../Wtkm-topBand/top-band.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBoxMailComponent  } from '../Input-box-mail/input-mail.component';


@Component({
  selector: 'app-pageFour',
  templateUrl: './PageFour.component.html',
  styleUrls: ['./PageFour.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent, TopBandComponent, CommonModule, FormsModule, ReactiveFormsModule, InputBoxMailComponent],

})
export class PageFourComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      morePublicity: false
    });
  }

  onSubmit() {
    // handle form submission here
  }

}