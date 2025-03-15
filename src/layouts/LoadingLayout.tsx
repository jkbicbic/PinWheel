import { Logo } from "../components/Logo";

export function LoadingLayout() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <Logo className="h-10 w-10 animate-spin [&>path]:fill-fuchsia-500" />      
    </div>
  );
}