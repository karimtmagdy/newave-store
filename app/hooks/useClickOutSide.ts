import {  useEffect, useRef } from "react";

const useClickOutSide = <T extends HTMLDivElement>(
  callback: () => void,
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<T>(null) as React.RefObject<HTMLDivElement>;
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);
  return ref //as RefObject<HTMLDivElement>;
};
export default useClickOutSide;
