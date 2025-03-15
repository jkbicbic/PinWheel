import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  icon?: string;
  onClick?: () => void;
}

export function IconButton({ icon, children, onClick }: IconButtonProps) {
  return (
    <button className="flex items-center gap-2 p-[1rem] w-fit cursor-pointer" onClick={onClick}>
      <img src={icon} alt="icon" />
      {children}
    </button>
  );
}