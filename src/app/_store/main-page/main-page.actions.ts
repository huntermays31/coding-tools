import { createAction, props } from '@ngrx/store';

const actionSrc = (description: string) => `[Main Page] ${description}`;

export const updateSearchValue = createAction(
  actionSrc('Update Search Value'),
  props<{ searchValue: string }>()
);
