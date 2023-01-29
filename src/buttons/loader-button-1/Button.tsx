import { useState } from "react";
import "./styles.css";
import iconSettings from "./settings.svg";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Button = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    await delay(3500);
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
    >
      <img src={iconSettings} />
      <span>{isLoading ? "Deploying" : "Deploy Site"}</span>
    </button>
  );
};
