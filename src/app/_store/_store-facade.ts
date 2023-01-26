import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as mainPageActions from './main-page/main-page.actions';

@Injectable({ providedIn: 'root' })
export class StoreFacade {

  constructor (private store: Store) { }

  updateSearchValue(searchValue: string): void {
    this.store.dispatch(mainPageActions.updateSearchValue({ searchValue }));
  }
}
