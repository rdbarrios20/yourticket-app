import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  UrlApi = 'http://localhost:8000/api/';
  constructor(private httpClient: HttpClient) {}

  addPurchase(purchase: any) {
    const params = {
      user_identification: purchase.user_identification,
      ticket_id: purchase.ticket_id,
    };

    const data = this.httpClient
      .post(this.UrlApi + 'create-user-tickets', params)
      .pipe(
        map((response) => {
          return response;
        })
      );

    return data;
  }
}
