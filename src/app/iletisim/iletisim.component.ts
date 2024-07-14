import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent implements OnInit{

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {

    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      console.log(`Name: ${name}, Email: ${email}, Message: ${message} `);
    }else {
      console.log('Form is invalid');
    }
  }

  private buildForm(): void {
    this.contactForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required]),
      email: this.formBuilder.control('',[Validators.required,Validators.email]),
      message: this.formBuilder.control('',[Validators.required]),
    });
  }

}
