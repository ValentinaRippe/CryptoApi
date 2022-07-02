import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private api = environment.api;
  toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get(this.api + 'list')
    .pipe(
      catchError((err) => {
        return this.toast.fire({
          icon: 'error',
          title: 'Api error',
          text: err.message
        })
      })
    )
  }

  getCoin(id: string | null) {
    return this.http.get(this.api + id)
    .pipe(
      catchError((err) => {
        return this.toast.fire({
          icon: 'error',
          title: 'Api error',
          text: err.message,
        })
      })
    )
  }
}
