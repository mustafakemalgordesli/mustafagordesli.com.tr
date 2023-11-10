import { configureStore } from '@reduxjs/toolkit';
import { reducer as menuReducer } from './menu-store';

export function createStore(preloadedState = {}) {
    const store = configureStore({
        reducer: {
            menu: menuReducer,
        },
        preloadedState,
    });

    return store;
}

export const store = createStore();