import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  className?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function IconButton({ icon, children, onClick, className, disabled }: IconButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 p-[1rem] w-fit cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={icon} alt="icon" />
      {children}
    </button>
  );
}