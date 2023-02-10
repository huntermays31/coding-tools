import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../../models/user-model';

const actionSrc = (description: string) => `[Users] ${description}`;

export const getAllUsers = createAction(
  actionSrc('Get All Users')
);

export const getAllUsersSuccess = createAction(
  actionSrc('Get All Users Success'),
  props<{ users: UserModel[] }>()
);
