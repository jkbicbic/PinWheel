import { PropsWithChildren, Suspense } from "react";
import { LoadingLayout } from "./LoadingLayout";


export function SuspenseLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<LoadingLayout />}>
      {children}
    </Suspense>
  );
}