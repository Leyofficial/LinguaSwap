import React, {useEffect} from 'react'

export const useClickOutSide = (ref, callback) => {
    const handlerClick  = e => {
        if(ref.current && !ref.current.contains(e.target)) {
            callback();
        };
    };

    useEffect(() => {
        document.addEventListener("mousedown", handlerClick);
        return () => {
            document.removeEventListener("mousedown", handlerClick)
        };
    });
}

