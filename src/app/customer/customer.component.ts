import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html',
})
export class CustomerComponent implements OnInit {
    @Input() customer: {id: number, name: string};

    private _customerService: CustomerService;
    constructor(customerService:CustomerService) { 
        this._customerService = customerService;
    }
    myColor = 'gray';


    ngOnInit() {
        // Code that runs on intialization


     }
}