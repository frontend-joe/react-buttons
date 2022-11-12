import { MouseEvent, useState } from "react";
import "./DropdownButton2.css";

type Skill = {
  name: string;
  isChecked: boolean;
};

export const DropdownButton2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [skills, setSkills] = useState<Skill[]>([
    {
      name: "HTML",
      isChecked: false,
    },
    {
      name: "CSS",
      isChecked: false,
    },
    {
      name: "JS",
      isChecked: false,
    },
  ]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: MouseEvent<HTMLInputElement>, skill: string) => {
    console.log("handleChange", e.currentTarget.checked, skill);

    const skillsCopy = [...skills];

    let foundSkill = skills?.find((s) => s.name === skill);

    if (!foundSkill) {
      return;
    }

    foundSkill.isChecked = e.currentTarget.checked;

    setSkills(skillsCopy);
  };

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {skills.map((skill) => (
          <label key={skill.name}>
            <input
              type="checkbox"
              onClick={(e: MouseEvent<HTMLInputElement>) =>
                handleChange(e, skill.name)
              }
            />
            <span>{skill.name}</span>
          </label>
        ))}
      </div>

      <button onClick={handleClick}>
        {skills.some((s) => s.isChecked) ? (
          skills
            .filter((s) => s.isChecked)
            .map((s, i) => (
              <span>
                {i !== 0 && ", "}
                {s.name}
              </span>
            ))
        ) : (
          <span className="placeholder">
            Please select
            <span className="material-symbols-outlined">expand_more</span>
          </span>
        )}
      </button>
    </div>
  );
};
