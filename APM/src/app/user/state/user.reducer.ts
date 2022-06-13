
import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { User } from '../user';


export interface State extends AppState.State {
    user: UserState;
}

export interface UserState {
    currentUser: User;
    maskUserName: boolean;
};

const initialState: UserState = {
    maskUserName: true,
    currentUser: null
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

//   export const userReducer = createReducer<UserState>(
//     initialState,
//     on(UserActions.maskUserName, (state): UserState => {
//       return {
//         ...state,
//         maskUserName: !state.maskUserName
//       };
//     })
//   );