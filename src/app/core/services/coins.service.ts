import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private api = environment.api;

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get(this.api + 'list');
  }

  getCoin(id: string) {
    return this.http.get(this.api + id);
  }
}
