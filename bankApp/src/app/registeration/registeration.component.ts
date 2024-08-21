import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import modules here
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'] // Fix to styleUrls
})
export class RegisterationComponent {

  form: FormGroup;
  currentStep: number = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.currentStep === 1 && this.form.get('firstName')?.valid) {
      this.currentStep = 2;
    } else if (this.currentStep === 2 && this.form.get('lastName')?.valid) {
      this.currentStep = 3;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
