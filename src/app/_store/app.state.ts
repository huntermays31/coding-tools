import { RouterReducerState } from '@ngrx/router-store';
import { MainPageState } from './main-page/main-page.selectors';

export interface ApplicationState {
  router: RouterReducerState;
  mainPage: MainPageState
}
