import { HTMLAttributes, PropsWithChildren } from "react";

interface Typography extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function Typography({ children, className, style }: Typography) {
  return (
    <p style={style} className={`font-[Poppins] text-white font-semibold ${className}`}>
      {children}
    </p>
  );
}