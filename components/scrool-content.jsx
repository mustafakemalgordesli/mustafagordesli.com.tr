'use client';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateState } from '@/lib/update-menu-state';

export default function ScroolContent({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        updateState(dispatch);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    const handleScroll = () => {
        updateState(dispatch);
    };

    return (
        <main className="w-full h-full" onWheel={handleScroll}>
            {children}
        </main>
    );
}
