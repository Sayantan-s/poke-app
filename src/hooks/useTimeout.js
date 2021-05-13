import { useCallback } from 'react';

const useTimeout = (time) => {
    const timer = useCallback(
        (callback) => {
            setTimeout(() => {
                return callback();
            }, time);
        },
        [time]
    );
    return timer;
};

export default useTimeout;
