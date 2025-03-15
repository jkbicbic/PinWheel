import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  className?: string;
  icon?: string;
  onClick?: () => void;
}

export function IconButton({ icon, children, onClick, className }: IconButtonProps) {
  return (
    <button className={`flex items-center gap-2 p-[1rem] w-fit cursor-pointer ${className}`} onClick={onClick}>
      <img src={icon} alt="icon" />
      {children}
    </button>
  );
}