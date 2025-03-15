import { PropsWithChildren } from "react";

interface Typography extends PropsWithChildren {
  className?: string;
}

export function Typography({ children, className }: Typography) {
  return (
    <p className={`font-[Poppins] text-white font-semibold ${className}`}>
      {children}
    </p>
  );
}