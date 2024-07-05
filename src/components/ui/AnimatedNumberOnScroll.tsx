import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedNumberOnScrollProps {
  startNumber: number;
  targetNumber: number;
  duration: number;
}

const AnimatedNumberOnScroll: React.FC<AnimatedNumberOnScrollProps> = ({ startNumber, targetNumber, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [number, setNumber] = useState<number>(startNumber);

  useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const increment = Math.min((progress / duration) * (targetNumber - startNumber) + startNumber, targetNumber);
        setNumber(Math.floor(increment));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, startNumber, targetNumber, duration]);

  return (
      <p ref={ref}>{number}</p>
  );
};

export default AnimatedNumberOnScroll;
