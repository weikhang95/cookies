import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import {NgForm} from '@angular/forms';


export interface userContactData {
  firstName: string;
  lastName: string;
  phone?: phone;
  remark?: string;
  captcha?: string;
}

export interface phone {
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})



export class ContactUsComponent implements OnInit {
  // @ViewChild('userForm') contactForm: NgForm;
  private _contactUserData: userContactData = {
    firstName: '',
    lastName: '',
    phone: {
      number: '',
      internationalNumber: '',
      nationalNumber: '',
      e164Number: '',
      countryCode: '',
      dialCode: '',
    } ,
    remark: '',
    captcha: ''
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Malaysia];


	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  onSubmit(form: NgForm){
     this._contactUserData = form.value;
    //  console.log(this._contactUserData);
  }

  // onSubmit() {
  //   console.log(this.contactForm);
  // }



}
