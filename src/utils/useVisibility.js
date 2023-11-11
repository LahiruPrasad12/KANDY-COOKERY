// useVisibility.js

import { useState, useEffect, useRef } from 'react';

const useVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll(); // Check visibility on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isVisible, ref };
};

export default useVisibility;
