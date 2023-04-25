import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WtkmFooterComponent } from '../Wtkm-Footer/footer.component';
import { TopBandComponent } from '../Wtkm-topBand/top-band.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { InputBoxCustomComponent  } from '../../Netflix-components/custom-input.component';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-pageFour',
  templateUrl: './PageFour.component.html',
  styleUrls: ['./PageFour.component.css'],
  standalone: true,
  imports: [RouterModule, WtkmFooterComponent, TopBandComponent, SharedModule, InputBoxCustomComponent],
  providers: [ApiService],
})
export class PageFourComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_]*$'),
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]],
      address: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]],
      zipCode: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$'),
      ]],
      morePublicity: [false],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.registerUser(this.loginForm.value).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Handle successful registration
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration error
        }
      );
    }
  }

}