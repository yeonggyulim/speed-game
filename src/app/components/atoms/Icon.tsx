import React from "react";

interface IconProps {
  type: "menu" | "close";
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  return (
    <svg className={`h-6 w-6 fill-current ${className}`} viewBox="0 0 24 24">
      {type === "menu" ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zM4 12h16a1 1 0 010 2H4a1 1 0 010-2zM4 19h16a1 1 0 010 2H4a1 1 0 010-2z"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="white"
          strokeWidth={3}
          d="M6 18L18 6M6 6l12 12"
        />
      )}
    </svg>
  );
};

export default Icon;
