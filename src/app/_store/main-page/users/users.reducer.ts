import { Action, createReducer, on } from '@ngrx/store';
import { initialUsersState, usersAdapter, UsersState } from './users.selectors';
import * as actions from './users.actions';

const reducer = createReducer(
  initialUsersState,
  on(actions.getAllUsersSuccess, (state, { users }) => {
    return usersAdapter.setAll(users, state);
  }),
);

export function usersReducer(state: UsersState, action: Action) {
  return reducer(state, action);
}
