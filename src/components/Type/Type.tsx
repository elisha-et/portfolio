import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './Type.css'

const Type = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ["Student...", "Software Developer...", "Data Analyst..."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2 className="type">
      <span ref={el} ></span>{" "}
    </h2>
  );
};

export default Type;
