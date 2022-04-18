import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Dragon } from '../models/dragons';
import { DragonsService } from './dragons.service';

@Injectable({
  providedIn: 'root',
})
export class DragonsResolverService {
  constructor(private router: Router, private dragonsService: DragonsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Dragon | any> {
    const id = route.params['id'];

    if (isNaN(+id)) {
      this.router.navigate(['/dragons/dragons-list']);
      return of(null);
    }

    return this.dragonsService.getById(id).pipe(
      catchError(() => {
        alert('Dragão não encontrado');
        this.router.navigate(['/dragons/dragons-list']);
        return of(null);
      })
    );
  }
}
