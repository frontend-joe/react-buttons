import { useState } from "react";
import "./styles.css";
import icon from "./reload.svg";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Button = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    await delay(3000);
    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
    >
      <img src={icon} />
      <span>{isLoading ? "Reloading" : "Reload App"}</span>
    </button>
  );
};
