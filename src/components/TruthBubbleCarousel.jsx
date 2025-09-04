import { useEffect, useState } from "react";

export default function TruthBubbleCarousel({
  items = [],
  interval = 3500,
}) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("in"); // "in" | "out"

  useEffect(() => {
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      setPhase("out");
      setTimeout(() => {
        setI((n) => (n + 1) % items.length);
        setPhase("in");
      }, 260); // match CSS transition
    };

    const id = setInterval(tick, interval);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [items.length, interval]);

  if (!items.length) return null;

  return (
    <div className="truth-bubble-wrap">
      <div className={`truth-bubble ${phase === "in" ? "enter" : "leave"}`}>
        {items[i]}
      </div>
    </div>
  );
}

