import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tradehistorylist',
  templateUrl: './tradehistorylist.component.html',
  styleUrls: ['./tradehistorylist.component.css']
})
export class TradehistorylistComponent extends BaseListCtl implements OnInit{

  public form = {
    error: false,
    message: null,
    preload: {
      productpreloadList: [] // Initialize customer list
    },
    data: { id: null },
    inputerror: {},
    searchParams: {
      userId: '',
      startDate: '',
      endDate: '', // Initialize date field
      dateOfJoining: '',
      transactiontypeId: null,
    },
    searchMessage: null,
    list: [],
    pageNo: 0

  };
 
  isValidquantityInput:boolean=true;
  isValidamountInput:boolean=true;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.TRADEHISTORY, locator, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
 
  // validateInput(event: any, field: string) {
  //   const value = event.target.value;
  
  //   switch(field) {
    
  
  //     case 'quantity':
  //       // Validate if input is a valid integer
  //       this.isValidquantityInput = /^[0-9]*$/.test(value);
  //       break;

  //       case 'amount':
  //         // Validate if input is a valid integer
  //         this.isValidamountInput = /^[0-9]*$/.test(value);
  //         break;
     
  
  //     default:
  //       break;
  //   }
  // }




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
