import { useState, useEffect } from 'react';

function useThrottle(value, limit = 300) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const lastRan = Date.now();
    const handler = setInterval(() => {
      if (Date.now() - lastRan >= limit) {
        setThrottledValue(value);
      }
    }, limit);

    return () => {
      clearInterval(handler);
    };
  }, [value, limit]);

  return throttledValue;
}

export default useThrottle;
