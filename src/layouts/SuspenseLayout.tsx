import { PropsWithChildren, Suspense } from "react";


export function SuspenseLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {children}
    </Suspense>
  );
}