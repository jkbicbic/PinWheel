import { PropsWithChildren } from "react";

interface PhoneChildLayoutProps {
  isExpanded?: boolean;
}

interface PhoneContentProps extends PhoneChildLayoutProps, PropsWithChildren {
  onClick: () => void;
}

export function PhoneSidebar({ isExpanded }: PhoneChildLayoutProps) {
  const baseClass = 'shrink-0 h-full w-[80%] overflow-hidden relative';
  const finalClass = isExpanded ? baseClass + ' left-0' : baseClass + ' left-[-100%]';

  return (
    <div className={finalClass}>
      <p>sidebar</p>
    </div>
  );
}

export function PhoneContent({ isExpanded, onClick, children }: PhoneContentProps) {
  const baseClass = 'shrink-0 h-full w-full overflow-hidden absolute top-0';
  const finalClass = isExpanded ? baseClass + ' left-[80%]' : baseClass + ' left-0';

  return (
    <div className={finalClass}>
      <div className={`bg-white h-full w-full rounded-2xl ${isExpanded ? 'scale-80 shadow-xl opacity-90' : ''}`}>
        <nav className="h-[2rem] flex items-center">
          <button onClick={onClick}>
            expand
          </button>
        </nav>
        <div className="h-[calc(100% - 2rem))] overflow-auto">
          content
          {children}
        </div>
      </div>
    </div>
  )
}

export function PhoneLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="flex w-[100vw] h-[100vh] bg-gradient-to-br from-fuchsia-600 via-violet-600 to-purple-600 relative overflow-hidden md:w-[20rem] md:h-[35.5rem] md:rounded-3xl">
        {children}
      </div>
    </div>
  );
}