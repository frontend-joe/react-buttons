import { useState } from "react";
import "./styles.css";

export const LoaderButton1 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`loader-button ${isLoading ? "loading" : ""}`}
    >
      Register Now
      <span className="loader"></span>
    </button>
  );
};
