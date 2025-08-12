import { createReducer, on } from '@ngrx/store';
import { setUser, logoutUser } from './user.actions';

export interface UserState { id: string | null; name: string | null; role: 'Team Member' | 'Team Lead' | null; }
export const initialUserState: UserState = { id: null, name: null, role: null };

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { id, name, role }) => ({ ...state, id, name, role })),
  on(logoutUser, () => initialUserState)
);
