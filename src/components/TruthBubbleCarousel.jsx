import { useEffect, useState } from "react";
import ThoughtCard from "./ThoughtCard";

const ANIMATION_DURATION = 400;

export default function TruthBubbleCarousel({
  items = [],
  interval = 3500,
}) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("enter"); 

  useEffect(() => {
    let timerId;
    if (phase === "enter") {
      timerId = setTimeout(() => {
        setPhase("idle");
      }, ANIMATION_DURATION);
    }
    return () => clearTimeout(timerId);
  }, [phase]);

  useEffect(() => {
    let timerId;
    if (phase === "idle") {
      timerId = setTimeout(() => {
        setPhase("leave"); 
      }, interval);
    }
    return () => clearTimeout(timerId);
  }, [phase, interval]);

  useEffect(() => {
    let timerId;
    if (phase === "leave") {
      timerId = setTimeout(() => {
        setI((prevI) => (prevI + 1) % items.length);
        setPhase("enter");
      }, ANIMATION_DURATION);
    }
    return () => clearTimeout(timerId);
  }, [phase, items.length]);

  if (!items.length) return null;

  const currentItem = items[i];
  let animationClass = "";

  if (phase === "enter") {
    animationClass = "enter";
  } else if (phase === "idle") {
    animationClass = "idle";
  } else if (phase === "leave") {
    animationClass = "leave";
  }

  return (
    <div className="truth-bubble-wrap">
      <ThoughtCard item={currentItem} className={animationClass} />
    </div>
  );
}

