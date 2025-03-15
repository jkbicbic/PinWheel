import { PropsWithChildren } from "react";

import { IconButton } from "../components/IconButton";
import { Typography } from "../components/Typography";

import { navConfig, NavConfigActionsEnum } from "../config/NavConfig";

import IconMenu from '../assets/icons/ic-menu.svg';
import { Logo } from "../components/Logo";

interface PhoneChildLayoutProps {
  isExpanded?: boolean;
}

interface PhoneSidebarProps extends PhoneChildLayoutProps {
  onNavChange: (action: NavConfigActionsEnum) => void;
}

interface PhoneContentProps extends PhoneChildLayoutProps, PropsWithChildren {
  onClick: () => void;
}

export function PhoneSidebar({ isExpanded, onNavChange }: PhoneSidebarProps) {
  const baseClass = 'shrink-0 h-full w-[80%] overflow-hidden relative';
  const finalClass = isExpanded ? baseClass + ' left-0' : baseClass + ' left-[-100%]';

  return (
    <div className={finalClass}>
      <ul className="h-full flex flex-col justify-center [&>li>button]:px-[2rem]">
        {navConfig.map((item) => (
          <li>
            <IconButton icon={item.icon} onClick={() => onNavChange(item.action)}>
              <Typography>{item.text}</Typography>  
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PhoneContent({ isExpanded, onClick, children }: PhoneContentProps) {
  const baseClass = 'shrink-0 h-full w-full overflow-hidden absolute top-0';
  const finalClass = isExpanded ? baseClass + ' left-[80%]' : baseClass + ' left-0';

  return (
    <div className={finalClass}>
      <div className={`bg-white h-full w-full md:rounded-2xl ${isExpanded ? 'scale-80 shadow-xl opacity-90 rounded-2xl' : ''}`}>
        <nav className="h-[4rem] flex gap-9 items-center justify-start px-[0.8rem]">
          <IconButton icon={IconMenu} onClick={onClick} />
          <Logo isFull />
        </nav>
        <div className="h-[calc(100% - 4rem))] overflow-auto">
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