import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component';
import { CustomerService } from './customer.service';


@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers:[CustomerService]

})
export class CustomersComponent implements OnInit {
    customers: any[];
    private _customerService: CustomerService;
    constructor(customerService: CustomerService) { 
        this._customerService = customerService;
    }
// Why not construcot ngOnInit will be called on RunTime so we use
    ngOnInit() { 
        this.customers = this._customerService.getCustomers();
    }
}