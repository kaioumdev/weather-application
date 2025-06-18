import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const debauncedCallback = (...args) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debauncedCallback;
};
export default useDebounce;