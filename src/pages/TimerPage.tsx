import { useEffect, useState } from 'react';

export const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);
  const [isVisibleGreeting, setIsVisibleGreeting] = useState(true);

  useEffect(() => {
    console.log('timer has mounted');

    const timerId = setInterval(() => {
      console.log('timer has called');
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      console.log('timer has unmounted');
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (seconds > 5) setIsVisibleGreeting(false);
  }, [seconds]);

  return (
    <div>
      <h2>Timer</h2>
      {isVisibleGreeting && <h3>Hello, effect</h3>}
      <p>Second: {seconds}</p>
    </div>
  );
};
