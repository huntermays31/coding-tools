import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../../../models/user-model';
import { mainPageFeatureKey, MainPageState } from '../main-page.selectors';

export interface UsersState extends EntityState<UserModel> {
  isLoading: boolean;
}

export const usersAdapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>(
  { selectId: user => user.userId }
);

export const initialUsersState: UsersState = {
  ...usersAdapter.getInitialState(),
  isLoading: false
}

const mainPageState = createFeatureSelector<MainPageState>(mainPageFeatureKey);

const getUsersState = createSelector(
  mainPageState,
  state => state.usersState
);
