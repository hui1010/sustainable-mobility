import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  clickable: boolean;
}

export function MyDropDown(props: Props) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <div
      className="my-dropdown"
      onClick={() => {
        if (props.clickable) setShowDropdown(!showDropdown);
      }}
    >
      <div className="dropdown-box">
        <p className="">{props.value}</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {showDropdown && props.clickable && (
        <div className="options">
          {props.options.map((option) => (
            <div
              className="option"
              style={{
                fontWeight: props.value === option ? "bold" : "normal",
                backgroundColor: props.value === option ? "#f5f5f5" : "#fff",
              }}
              onClick={() =>
                props.onChange(props.value === option ? "" : option)
              }
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
