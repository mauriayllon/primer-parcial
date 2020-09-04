import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {

  constructor(private http : HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('https://super-ticket-test.firebaseio.com/concerts.json');
  }

  public addProduct(product: any): Observable <any>{
    return this.http.post('https://super-ticket-test.firebaseio.com/concerts.json', product)
  }

  public deleteProduct(id: any): Observable<any>{
    return this.http.delete(`https://super-ticket-test.firebaseio.com/concerts/{id}.json`)
  }

  public updateProduct(id:any, ticket:any): Observable<any>{
    return this.http.put(`https://super-ticket-test.firebaseio.com/concerts/{id}.json`,ticket)
  }
}