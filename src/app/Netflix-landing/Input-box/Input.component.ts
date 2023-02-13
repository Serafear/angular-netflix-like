import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-input-box',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})


export class InputBoxComponent implements OnInit {

  
  form: FormGroup;
  
  ngOnInit(): void {this.form = this.fb.group({
    email: ['', [emailValidator]]
  });}

  constructor(private router: Router, private fb: FormBuilder,) {}

  onFocus(event) {
    event.target.parentElement.querySelector('label').classList.add('focused');
  }

  onBlur(event) {
    if (event.target.value === '') {
      event.target.parentElement.querySelector('label').classList.remove('focused');
    }
  }
  onInput(event) {
    const input = event.target;
    input.style.borderBottom = '2px solid';
    if (this.email.value) {
      if (this.email.invalid && (this.email.dirty || this.email.touched)) {
        input.style.border = '2px solid red';
      } else {
        input.style.border = '2px solid green';
      }
    }
    else {
      input.style.border = '2px solid #ddd';
    }
  }

  get email() {
    return this.form.get('email');
  }

  goToNextPage() {
    this.router.navigate(['next-page']);
  }
}

function emailValidator(control: AbstractControl): { [key: string]: any } | null {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = control.value;
  return emailRegex.test(email) ? null : { email: true };
}