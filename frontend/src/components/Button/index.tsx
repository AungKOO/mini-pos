import React from "react";
type ButtonProps = {
  label: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};
const Button: React.FC<ButtonProps> = ({ label, onSubmit, onClick }) => {
  return (
    <>
      <button
        className="text-white font-bold py-2 px-4 rounded bg-blue-800 hover:bg-blue-600 w-full"
        onSubmit={onSubmit}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
export default Button;
