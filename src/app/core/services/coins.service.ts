import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private api = environment.api;

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get(this.api + 'list');
  }

  getCoin(id: string |null) {
    return this.http.get(this.api + id).pipe(
      catchError(():any=>{
        return console.log('error');
      })
    );
  }
}
