import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customer.json'

@Injectable()
export class CustomerService {
    
    constructor(private _http:Http){

    }
// (method) CustomerService.getCustomers(): Observable<any>;
getCustomers(){
 
    
   return this._http.get(URL_CUSTOMER)
   .map((response : Response) => response.json())
   .catch(this._handleErr);
}

_handleErr(err:any){
    console.log(err);
    return Observable.throw(err);
}

}