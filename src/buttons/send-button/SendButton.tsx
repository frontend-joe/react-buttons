import { useState } from "react";

import "./styles.css";

export const SendButton = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={isSending || isSent ? "sending" : ""}
    >
      <span className="icon material-symbols-outlined">
        {isSent ? "check" : "send"}
      </span>
      <span className="text">
        {isSending ? "Sending ..." : isSent ? "Sent" : "Send Message"}
      </span>
    </button>
  );
};
