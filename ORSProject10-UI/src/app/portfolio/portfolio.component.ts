import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends BaseCtl {


  getKey = false;
  selected = null;
  userForm: FormGroup = null;
  uploadForm: FormGroup;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.PORTFOLIO, locator, route);
  }

  isValidMobileInput: boolean = true;
  isValidNameInput: boolean = true;
  isValidPaymentTermInput: boolean = true;
  nameErrorMessage: string = '';
  mobileErrorMessage: string = '';
  paymentTermErrorMessage: string = '';



  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'mobile') {
      this.isValidMobileInput = /^[0-9]*$/.test(value);
      this.mobileErrorMessage = this.isValidMobileInput ? '' : 'Please type numbers only';
    } else if (field === 'name') {
      this.isValidNameInput = /^[A-Za-z\s]*$/.test(value);
      this.nameErrorMessage = this.isValidNameInput ? '' : 'Please type alphabets only';
    } else if (field === 'paymentTerm') {
      const paymentTermValue = Number(value);
      this.isValidPaymentTermInput = paymentTermValue >= 100000 && paymentTermValue <= 500000;
      this.paymentTermErrorMessage = this.isValidPaymentTermInput ? '' : 'Please type a number between 1 lakh and 50000';
    }
  }

  submit() {
    var _self = this;
    console.log('in submit');
    console.log(this.form);
    console.log(this.form.data);
  
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.inputerror = {}; // Clear input errors here
  
      if (res.success) {
        _self.form.error = false; // Set error to false on success
        _self.form.message = "Data is saved";
        _self.form.data.id = res.result.data;
        console.log(_self.form.data.id);
        console.log("----------Rahul----------.");
  
        // Clear form data if needed
        // _self.form.data = {};
  
      } else {
        _self.form.error = true;
        if (res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }
  
  

  submit1() {
    var _self = this;
    console.log(this.form + "submit running start");
    console.log(this.form.data + "form data going to be submit");
    this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.inputerror = {};
      _self.form.data.id = res.result.data;


      if (res.success) {
        _self.form.message = "Data is saved";
        _self.form.data.id = res.result.data;


        console.log(_self.form.data.id);
        console.log("--------------------.");

      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }
      _self.form.data.id = res.result.data;
      console.log('FORM', _self.form);
    });
  }




  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }


  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.categoryId);
    console.log(form.categoryId);
    flag = flag && validator.isNotNullObject(form.name);
    console.log(form.name);
    flag = flag && validator.isNotNullObject(form.paymentTerm);
    console.log(form.paymentTerm);
    flag = flag && validator.isNotNullObject(form.registrationDate);
    console.log(form.registrationDate);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id + 'populate form in shoppingcomponent');
    form.name = data.name;
    form.paymentTerm = data.paymentTerm;
    form.strategy = data.strategy;
    form.preloadId = data.preloadId;
   


  }

  validatePhone(event: KeyboardEvent) {
    const input = event.key;
    // Check if the input is a number or backspace
    if ((isNaN(Number(input)) && input !== 'Backspace') || (input === ' ')) {
      event.preventDefault();
    }
    // Limit the input to 10 characters
    if (this.form.data.phone && this.form.data.phone.length >= 10 && input !== 'Backspace') {
      event.preventDefault();
    }
  }

  limitInputw(event: any, maxLength: number) {
    const target = event.target;
    const value = target.value;
  
    // Check if the input length is greater than or equal to the maxLength
    if (value.length >= maxLength) {
      event.preventDefault();
      return;
    }
  
    // Updated regex pattern to allow letters, spaces, and up to 15 digits
    if (!/^[a-zA-Z\s]*\d{0,15}$/.test(value + event.key)) {
      event.preventDefault();
    }
  }
  

  validateNumberInput(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    const charStr = String.fromCharCode(charCode);

    // Allow only digits
    if (!/^\d$/.test(charStr)) {
      event.preventDefault();
    }
  }


  validateAlphabetInput(event) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);

    // Regular expression to test if the character is a letter
    const letterRegex = /^[a-zA-Z\s]+$/;

    // Test if the input matches the allowed characters
    if (!letterRegex.test(charStr)) {
      event.preventDefault();
    }

    // Optionally, check the entire value against the name format regex
    const inputElement = event.target;
    const inputValue = inputElement.value + charStr; // Add the current character to the input value

    // Regex for valid name format "FirstName LastName"
    const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    // Check if the current value matches the valid name format
    if (!nameRegex.test(inputValue)) {
      // Handle invalid input (e.g., disable submit button, show error message)
      // Example:
      inputElement.classList.add('invalid'); // Apply CSS class for invalid input
    } else {
      inputElement.classList.remove('invalid'); // Remove invalid CSS class if format is valid
    }
  }




  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  test() {

  }

}


