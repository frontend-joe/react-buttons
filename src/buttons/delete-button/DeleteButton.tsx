import { useState } from "react";
import "./styles.css";

export const DeleteButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    // do something async
    setTimeout(() => {
      setIsDeleting(false);
    }, 2500);
  };

  return (
    <button
      onClick={handleClick}
      className={isDeleting ? "deleting" : ""}
      disabled={isDeleting}
    >
      <span className="button-text">
        {isDeleting ? "Deleting ..." : "Delete User"}
      </span>
      <span className="animation">
        <span className="paper-wrapper">
          <span className="paper"></span>
        </span>
        <span className="shredded-wrapper">
          <span className="shredded"></span>
        </span>
        <span className="lid"></span>
        <span className="can">
          <span className="filler"></span>
        </span>
      </span>
    </button>
  );
};
