import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <p className="font-[Poppins] text-white font-semibold">
      {children}
    </p>
  );
}