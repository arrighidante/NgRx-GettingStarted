import { createAction, props } from '@ngrx/store';
import { User } from '../user';

export const maskUserName = createAction(
    '[User] Mask User Name'
);
