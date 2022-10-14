
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  UrlApi = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) {}

  //Obtienes los usuarios o el user especificio. Razon por la cual para hacer sobre carga se cambia de GET a POST
  getAll() {
    const data = this.httpClient.get(this.UrlApi + 'get-all-users').pipe(
      map((response) => {
        return response;
      })
    );
    return data;
  }

  add(user: any) {
    const params = {
      name: user.name,
      identification: user.identification,
      surnames: user.surnames,
      email: user.email,
    };

    const data = this.httpClient
      .post(this.UrlApi + 'register-user', params)
      .pipe(
        map((response) => {
          return response;
        })
      );
    return data;
  }
}

