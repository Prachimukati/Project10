import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent  extends BaseListCtl implements OnInit {

  public form = {
    error: false,
    message: null,
    preload: {
      stockpurchaseList: [] // Initialize customer list
    },
    data: { id: null },
    inputerror: {},
    searchParams: {
      quantity: '',
      purcahsePrice: '',
      purchaseDate: '', // Initialize date field
      ordertypeId: null,
    },
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  isValidMobileInput: boolean = true;
  isValidNameInput: boolean = true;
  nameErrorMessage: string = '';
  mobileErrorMessage: string = '';
  purchasePriceErrorMessage:string = '';
  purcahsePriceErrorMessage:string ='';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.STOCKPURCHASE, locator, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  // Format date function
  formatDate(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    this.form.searchParams.purchaseDate = formattedDate;
  }

  // Convert date to local format for display
  convertToLocalDate(dateString: string): string {
    const date = new Date(dateString);
    // Format date to 'MM/DD/YYYY'
    const options:any = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  // Validate input for name and mobile fields
  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'phoneNumber') {
      this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
      if (!this.isValidMobileInput) {
        this.mobileErrorMessage = 'Please type a 10 digit number';
      } else if (value.length > 10) {
        this.isValidMobileInput = false;
        this.mobileErrorMessage = 'Phone number cannot exceed 10 digits';
      } else {
        this.mobileErrorMessage = '';
      }
    } else if (field === 'name') {
      this.isValidNameInput = /^[A-Za-z\s]*$/.test(value); // Check if the input contains only letters and spaces
      if (!this.isValidNameInput) {
        this.nameErrorMessage = 'Invalid name input: numbers are not allowed';
      } else {
        this.nameErrorMessage = '';
      }
    } else if (field === 'purcahsePrice') {
      const amount = parseFloat(value);
      if (isNaN(amount) || amount < 10000 || amount > 500000) {
        this.purcahsePriceErrorMessage = 'Please type a value between 10000 to 500000';
      } else {
        this.purcahsePriceErrorMessage = '';
      }
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
  validateQuantity(event: any) {
    const value = event;
    if (!/^\d{0,4}$/.test(value)) {
      this.form.searchParams.quantity = value.slice(0, 4).replace(/\D/g, ''); // Allow only digits and limit to 4 characters
    }
  }

}