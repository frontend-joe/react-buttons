import { useState } from "react";
import "./styles.css";

export const Button = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`fab ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined">add</span>
      </button>
      <div className="menu">
        <button>
          <span className="material-symbols-outlined">add_box</span>
        </button>
        <button>
          <span className="material-symbols-outlined">sell</span>
        </button>
        <button>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};
