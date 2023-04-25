import { Component, OnInit, Input, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-input-custom',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  standalone:true,
  imports: [SharedModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBoxCustomComponent),
      multi: true,
    },
  ],

})
export class InputBoxCustomComponent implements ControlValueAccessor {
  @Input() form: FormGroup;
  @Input() inputType: string;
  @Input() formControlName: string;
  @Input() errorMessages: any; // Add this input property to receive error messages
  @ViewChild('inputBoxCustom') inputBoxCustom: ElementRef;

  writeValue(obj: any): void {
    if (this.inputBoxCustom) {
      this.inputBoxCustom.nativeElement.value = obj;
    }
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    if (this.inputBoxCustom) {
      this.inputBoxCustom.nativeElement.disabled = isDisabled;
    }
  }
  
  private onChange = (_: any) => {};
  private onTouched = () => {};

  onFocus(event) {
    event.target.parentElement.querySelector('label').classList.add('focused');
  }

  onBlur(event) {
    if (event.target.value === '') {
      event.target.parentElement.querySelector('label').classList.remove('focused');
    }
  }

  onInput(event: any) {
    console.log('onInput method called!');
    const input = event.target;
    const formControl = this.form.get(this.formControlName);
    console.log('formControl:', formControl);
  
    console.log('Dirty:', formControl.dirty);
    console.log('Touched:', formControl.touched);
  
    if (input.value) {
      this.inputBoxCustom.nativeElement.classList.add('has-value');
    } else {
      this.inputBoxCustom.nativeElement.classList.remove('has-value');
    }
  
    if (formControl.invalid && (formControl.dirty || formControl.touched)) {
      input.style.border = '2px solid red';
    } else if (formControl.valid) {
      input.style.border = '2px solid green';
    } else {
      input.style.border = '2px solid #8C8C8C';
    }
  
    // Call the registered onChange method
    this.onChange(input.value);
  }
  
  inputClasses() {
    if (!this.form || !this.formControlName) {
      return {};
    }
  
    const formControl = this.form.get(this.formControlName);
  
    return {
      'valid': formControl.valid && (formControl.dirty || formControl.touched),
      'invalid': formControl.invalid && (formControl.dirty || formControl.touched)
    };
  }
  
  
}
