import { useEffect, useRef } from 'react';

export const useAutoScroll = (dependency: any) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current && endRef.current.scrollIntoView) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dependency]);

  return endRef;
};