import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, filter, take, switchMap } from 'rxjs/operators';

import * as fromStore from "../store";
import { getPizzasLoaded } from '../store';
import { of } from 'rxjs/observable/of';

@Injectable()

export class PizzaGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(()  => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(getPizzasLoaded)
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadPizzas())
          }
        }),
        filter(loaded => loaded),
        take(1)
      )
  }
}
