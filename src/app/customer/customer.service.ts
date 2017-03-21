import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    
    constructor(){

    }

getCustomers(){
    return [
        {id:1, name:'deepakrohan'},
        {id:2, name:'gshiva'}
    ];
}



}