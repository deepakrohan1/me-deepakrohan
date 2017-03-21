import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component';


@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',

})
export class CustomersComponent implements OnInit {
    customers = [
      {id: '1', name: 'deepakrohan'},
      {id: '2', name: 'shiva'}
  ];
    constructor() { }

    ngOnInit() { }
}