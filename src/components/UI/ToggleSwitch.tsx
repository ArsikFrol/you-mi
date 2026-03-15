'use client';

import { useState } from 'react';

type Props = {
    value: boolean,
    setValue: Function
}

export default function ToggleSwitch(props: Props) {
    return (
        <label className="relative inline-block w-14 h-8 cursor-pointer">
            <input type="checkbox" checked={props.value} onChange={() => props.setValue(!props.value)}
                className="absolute opacity-0 w-0 h-0" />
            <span className={`absolute inset-0 rounded-full transition-all duration-400 ease-in-out
                ${props.value ? 'bg-blue-500' : 'bg-gray-300'}`}>
            </span>
            <span className={`absolute left-1 bottom-1 bg-white w-6 h-6 rounded-full transition-all duration-400 ease-in-out
                ${props.value ? 'translate-x-6' : ''}`}>
            </span>
        </label>
    );
}