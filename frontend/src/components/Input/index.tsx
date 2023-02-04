import React from "react";
type InputProps = {
  placeholder: string;
  label: string;
  inputType: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void
};

const Input: React.FC<InputProps> = ({ placeholder, label, inputType, onBlur }) => {
  return (
    <>
      <p>{label}</p>
      <input
        type={inputType}
        onBlur={onBlur}
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder={placeholder}

      />
    </>
  );
};
export default Input;
