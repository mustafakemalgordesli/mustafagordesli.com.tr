'use client';

import { Provider } from 'react-redux';
import { createStore } from '.';

export function StoreProvider({ children }) {
    const store = createStore();
    return <Provider store={store}>{children}</Provider>;
}
