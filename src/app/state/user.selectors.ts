import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUser = createSelector(selectUserState, s => s);
export const selectUserName = createSelector(selectUserState, s => s.name);
export const selectUserRole = createSelector(selectUserState, s => s.role);
