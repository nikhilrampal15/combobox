import React, { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLInputElement>, callback:(event: MouseEvent) => void) => {
    useEffect(() => {
            const listener = (event: MouseEvent) => {
                if (!ref.current || ref.current.contains(event.target as Element)) {
                    return;
                }
                callback(event);
            };
            document.addEventListener("mousedown", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
            };
        },
    );
};

export default useClickOutside