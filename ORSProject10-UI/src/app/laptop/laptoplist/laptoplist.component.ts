import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css']
})
export class LaptoplistComponent extends BaseListCtl implements OnInit {

  public form = {
    error: false,
    message: null,
    preload: {
      categoryList: [] // Initialize customer list
    },
    data: { id: null },
    inputerror: {},
    searchParams: {
      version: '',
      price: '',
      registrationDate: '',
      laptopNameId: null,
      date: ''
    },
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  isValidMobileInput: boolean = true;
  isValidNameInput: boolean = true;
  isValidPaymentTermInput: boolean = true;
  versionErrorMessage: string = '';
  mobileErrorMessage: string = '';
  paymentTermErrorMessage: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.LAPTOP, locator, route);
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
    const options:any = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  // Validate input for name, mobile, and payment term fields
  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === ' ') {
      this.isValidMobileInput = /^[0-9]*$/.test(value);
      this.mobileErrorMessage = this.isValidMobileInput ? '' : 'Please type numbers only';
    } else if (field === 'version') {
      this.isValidNameInput = /^[A-Za-z\s]*$/.test(value);
      this.versionErrorMessage = this.isValidNameInput ? '' : 'Please type alphabets only';
    } else if (field === 'price') {
      const paymentTermValue = Number(value);
      this.isValidPaymentTermInput = paymentTermValue >= 0 && paymentTermValue <= 500;
      this.paymentTermErrorMessage = this.isValidPaymentTermInput ? '' : 'Please type a number between 1 and 500';
    }
  }

  // Submit method
  submit() {
    this.form.pageNo = 0;
    this.search();
  }

  // Search method
  search() {
    this.form.searchMessage = null;
    super.search();
  }
}
