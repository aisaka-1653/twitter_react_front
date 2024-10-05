import { useEffect, useState } from "react";

export const useIsIntersecting = <RefElement extends HTMLElement>(
  ref: React.MutableRefObject<RefElement | null>
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 100px 0px",
      }
    );

    let observerRefCurrent: RefElement | null = null;

    observer.observe(ref.current);
    observerRefCurrent = ref.current;

    return () => {
      observer.unobserve(observerRefCurrent as RefElement);
    };
  });

  return isIntersecting;
};
