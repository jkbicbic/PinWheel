import { PropsWithChildren } from "react";

import { IconButton } from "../components/IconButton";
import { Typography } from "../components/Typography";

import { navConfig } from "../config/NavConfig";

import IconMenu from '../assets/icons/ic-menu.svg';
import { Logo } from "../components/Logo";
import { useNav } from "../context/Nav";

export function PhoneSidebar() {
  const { isExpanded, onChangeAction } = useNav();

  const baseClass = 'shrink-0 h-full w-[80%] overflow-hidden relative';
  const finalClass = isExpanded ? baseClass + ' left-0' : baseClass + ' left-[-100%]';

  return (
    <div className={finalClass}>
      <ul className="h-full flex flex-col justify-center [&>li>button]:px-[2rem]">
        {navConfig.map((item) => (
          <li>
            <IconButton icon={item.icon} onClick={() => onChangeAction(item.action)}>
              <Typography>{item.text}</Typography>  
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PhoneContent({ children }: PropsWithChildren) {
  const { isExpanded, onExpand } = useNav();

  const baseClass = 'shrink-0 h-full w-full overflow-hidden absolute top-0';
  const finalClass = isExpanded ? baseClass + ' left-[80%]' : baseClass + ' left-0';

  return (
    <div className={finalClass}>
      <div className={`flex flex-col overflow-auto bg-white h-full w-full shadow-xl rounded-2xl ${isExpanded ? 'scale-80 opacity-90' : ''}`}>
        <nav className="sticky h-[4rem] w-full flex items-center justify-between px-[0.8rem] z-2">
          <IconButton icon={IconMenu} onClick={onExpand} />
          <Logo className="justify-self-center [&>path]:fill-purple-600" isFull />
          <div className="w-[3.5rem]" />
        </nav>
        <div className="flex-grow w-full overflow-auto p-[0.625rem]">
          {children}
        </div>
      </div>
    </div>
  )
}

export function PhoneLayout({ children }: PropsWithChildren) {
  const { isExpanded } = useNav();

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div
        className={`flex w-[100vw] h-[100vh] relative overflow-hidden md:w-[20rem] md:h-[35.5rem] md:rounded-3xl bg-gradient-to-br ${isExpanded ? ' from-fuchsia-600 via-violet-600 to-purple-600 !transition-none' : ' from-fuchsia-50 to-fuchsia-50 !transition !delay-[0.3s]'}`}
      >
        {children}
      </div>
    </div>
  );
}