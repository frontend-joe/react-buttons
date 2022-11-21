import { useState } from "react";
import "./styles.css";
import iconSettings from "./settings.svg";

export const Button = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
    >
      <span>
        <img src={iconSettings} />
        <img src={iconSettings} />
      </span>
      <span>Create User</span>
    </button>
  );
};
