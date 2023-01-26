import { Action, createReducer, on } from '@ngrx/store';
import { initialMainPageState, MainPageState } from './main-page.selectors';
import * as actions from './main-page.actions';

const reducer = createReducer(
  initialMainPageState,
  on(actions.updateSearchValue, (state, { searchValue }) => {
    return {
      ...state,
      searchValue
    }
  }),
);

export function mainPageReducer(state: MainPageState, action: Action) {
  return reducer(state, action);
}
