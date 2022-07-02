import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private api = environment.api;
  toast = Swal.mixin({
    toast: true,
    showConfirmButton: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(private http: HttpClient, private router: Router) { }

  getCoins() {
    return this.http.get(this.api + 'list')
    .pipe(
      catchError((err) => {
        return this.toast.fire({
          icon: 'error',
          title: 'Api error',
          text: err.message
        }).then((result) => {
          if (result.isConfirmed) {
            setTimeout(() => {
              this.router.navigate(['']);
            }, 1500);
          }
        });
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
        }).then((result) => {
          if (result.isConfirmed) {
            setTimeout(() => {
              this.router.navigate(['']);
            }, 1500);
          }
        });
      })
    )
  }
}
