import { createAction, props } from '@ngrx/store';
import { UserRole } from '../core/models/user.model';
export const setUser = createAction('[User] Set', props<{ id: string, name: string, role: UserRole }>() );
export const logoutUser = createAction('[User] Logout');
