import React from "react";

interface Props {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export function MyDropDown(props: Props) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <div className="my-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
      {showDropdown && (
        <div className="options">
          {props.options.map((option) => (
            <div className="option">{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
