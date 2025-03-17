import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transportationlist',
  templateUrl: './transportationlist.component.html',
  styleUrls: ['./transportationlist.component.css']
})
export class TransportationlistComponent extends BaseListCtl implements OnInit {

  public form = {
    error: false,
    message: null,
    preload: {
      modeList: [] // Initialize customer list
    },
    data: { id: null },
    inputerror: { quantity: '', productName: '' },
    searchParams: {
      name: '',
      date: '', // Initialize date field
      modeId: null, // Initialize customerId to null
      cost: '',

    },
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  isValidCost: boolean = true;
  costErrorMessage: string = '';
  isValidDescription: boolean = true;
  descriptionErrorMessage: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.TRANSPORTATION, locator, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  // Format date function
  formatDate(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Ensure it's in ISO format
    this.form.searchParams.date = formattedDate;
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
    } else if (field === 'description') {
      this.isValidNameInput = /^[A-Za-z\s]*$/.test(value);
      this.nameErrorMessage = this.isValidNameInput ? '' : 'Please type alphabets only';
    } else if (field === 'cost') {
      const paymentTermValue = Number(value);
      this.isValidPaymentTermInput = paymentTermValue >= 0 && paymentTermValue <= 99999;
      console.log('=====Rahul Kirar range===================');
      this.paymentTermErrorMessage = this.isValidPaymentTermInput ? '' : 'Please type a number between 1 and 99999';
    }
  }

  // Convert date to local format for display
  convertToLocalDate(dateString: string): string {
    const date = new Date(dateString);
    // Format date to 'MM/DD/YYYY'
    const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }


  validateCost() {
    const cost = this.form.searchParams.cost;
    const costValue = Number(cost);
    if (!cost || isNaN(costValue) || costValue <= 0 || costValue > 5000000) {
      this.isValidCost = false;
      this.costErrorMessage = 'Please enter valid cost value';
    } else {
      this.isValidCost = true;
      this.costErrorMessage = '';
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
