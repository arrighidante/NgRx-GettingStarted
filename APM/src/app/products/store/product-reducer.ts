import { createAction, createReducer, on } from '@ngrx/store';

// export interface State {

// };

// const initialState: State = {
// showProductCode: true
// };

export const productReducer = createReducer(
    { showProductCode: true },
    on(createAction('[Product] Toggle Product Code'), state => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })

);