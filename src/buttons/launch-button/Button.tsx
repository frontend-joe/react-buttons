import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import "./styles.css";

export const Button = () => {
  const [isLaunching, setIsLaunching] = useState<boolean>(false);

  const handleClick = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
    }, 3000);
  };

  return (
    <button onClick={handleClick} className={isLaunching ? "launching" : ""}>
      <img className="rocket" src={rocket} />
      <span>Launch</span>
      <img className="smoke" src={smoke} />
    </button>
  );
};
