import { initialUsersState, UsersState } from './users/users.selectors';

export const mainPageFeatureKey = 'main';

export interface MainPageState {
  searchValue: string;
  usersState: UsersState
}

export const initialMainPageState: MainPageState = {
  searchValue: '',
  usersState: initialUsersState
};
