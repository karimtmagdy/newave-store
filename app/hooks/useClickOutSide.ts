import { useEffect, useRef, type RefObject } from "react";

const useClickOutSide = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) handler();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler]);
  return ref as RefObject<T>;
};
// as HTMLElement HTMLDivElement

export default useClickOutSide;
