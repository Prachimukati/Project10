import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loanslist',
  templateUrl: './loanslist.component.html',
  styleUrls: ['./loanslist.component.css']
})
export class LoanslistComponent extends BaseListCtl implements OnInit {

  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {

      loanAmount: '',
      date: '', // Initialize date field
      customerIdId: '',
      
      interestRate: '',
      loanStartDate: ''
    },
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.LOANS, locator, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
  

  // Format date function
  formatDate(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    this.form.searchParams.date = formattedDate;
  }

  // Convert date to local format for display
  convertToLocalDate(dateString: string): string {
    const date = new Date(dateString);
    // Format date to 'MM/DD/YYYY'
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  isValidMobileInput: boolean = true;
  isValidNameInput: boolean = true;
  isValidPaymentTermInput: boolean = true;
  nameErrorMessage: string = '';
  mobileErrorMessage: string = '';
  paymentTermErrorMessage: string = '';

  // Validate input for name and mobile fields
  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'mobile') {
      this.isValidMobileInput = /^[0-9]*$/.test(value);
      this.mobileErrorMessage = this.isValidMobileInput ? '' : 'Please type numbers only';
    } else if (field === 'name') {
      this.isValidNameInput = /^[A-Za-z\s]*$/.test(value);
      this.nameErrorMessage = this.isValidNameInput ? '' : 'Please type alphabets only';
    } else if (field === 'loanAmount') {
      const paymentTermValue = Number(value);
      this.isValidPaymentTermInput = paymentTermValue >= 50000 && paymentTermValue <= 1000000;
      this.paymentTermErrorMessage = this.isValidPaymentTermInput ? '' : 'Please type a number between 50000 and 1000000';
    }else if (field === 'loanAmount') {
      const paymentTermValues = Number(value);
      this.isValidPaymentTermInput = paymentTermValues >= 50000 && paymentTermValues <= 1000000;
     
      this.nameErrorMessage = this.isValidMobileInput ? '' : 'Please type a number between 5 and 12';
    }
  }


  // Submit method
  submit() {
    // Reset page number before searching
    this.form.pageNo = 0;
    // Call the search method after formatting the date
    this.search();
  }


  // Search method
  search() {
    // Clear previous search message
    this.form.searchMessage = null;
    // Perform the search operation with the search parameters
    super.search();
  }
}
