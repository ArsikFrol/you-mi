'use client';

import { Toaster } from 'react-hot-toast';

export function ToastProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 4000,
                    className: 'font-sans text-sm',
                    success: {
                        className: '!bg-green-50 !text-green-900 !border !border-green-200',
                    },
                    error: {
                        className: '!bg-red-50 !text-red-900 !border !border-red-200',
                    },
                }}
            />
        </>
    );
}