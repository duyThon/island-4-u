import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
