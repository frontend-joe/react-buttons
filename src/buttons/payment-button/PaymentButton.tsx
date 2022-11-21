import { useState } from "react";

import "./styles.css";

export const PaymentButton = () => {
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const handleClick = () => {
    setIsPaying(true);

    setTimeout(() => {
      setIsPaying(false);
      setIsPaid(true);
      setTimeout(() => {
        //setIsPaid(false);
      }, 2000);
    }, 2000);
  };

  return (
    <button disabled={isPaying || isPaid} onClick={handleClick}>
      <span className="rail"></span>
      <span className="icon"></span>
      <span className="text">
        {isPaying ? "Processing" : isPaid ? "Complete" : "Buy Product Now"}
      </span>
    </button>
  );
};
