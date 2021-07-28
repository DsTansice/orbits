import React, { useState } from "react";
import { Logo } from "../../types/ui.types";

interface CustomInput {
  className: string;
  onSubmit?: (...args: any[]) => void;
  logo?: Logo;
  [otherProps: string]: any;
}

const CustomInput = ({
  className,
  onSubmit,
  logo,
  ...otherProps
}: CustomInput): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  //form typed buttons
  if (onSubmit) {
    return (
      <form
        className={`px-1 rounded-lg inline-flex ${className || ""} ${
          isActive ? "border-2 border-secondary" : ""
        }`}
        onSubmit={onSubmit}
      >
        <div>{logo}</div>
        <input
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className="w-full outline-none text-base text-primary px-1 bg-transparent rounded-lg"
          {...otherProps}
        />
      </form>
    );
  }
  return (
    <div
      className={`px-1 rounded-lg inline-flex ${className || ""} ${
        isActive ? "border-2 border-secondary" : ""
      }`}
    >
      <div>{logo}</div>
      <input
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className="w-full outline-none text-base text-primary px-1 bg-transparent rounded-lg"
        {...otherProps}
      />
    </div>
  );
};

export default CustomInput;
