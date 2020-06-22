import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    let prodServerPath: string = "";
    let devServerPath: string = "http://localhost:4000";

    return this.http.get(`${prodServerPath}/beers`)
  }
}
