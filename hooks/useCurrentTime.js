import { useState, useEffect } from 'react';

export const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1. Start the interval (Tick every 1 second)
    const timerId = setInterval(() => {
      console.log("Tick... (Hook is active)");
      setTime(new Date());
    }, 1000);

    // 2. THE CLEANUP (Prevent Memory Leak)
    // This runs when the component using this hook disappears
    return () => {
      console.log("Cleaning up timer! 🧹");
      clearInterval(timerId);
    };
  }, []);

  // Return the date object so the component can format it
  return time;
};