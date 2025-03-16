import { createContext, PropsWithChildren, useContext, useState } from "react";
import { NavConfigActionsEnum } from "../config/NavConfig";

interface NavContextType {
  action: NavConfigActionsEnum;
  isExpanded: boolean;
  onExpand: () => void;
  onChangeAction: (action: NavConfigActionsEnum) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export function NavProvider({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [action, setAction] = useState<NavConfigActionsEnum>(NavConfigActionsEnum.GENERATE);

  const onExpand = (): void => {
    setIsExpanded(true);
  }

  const onChangeAction = (action: NavConfigActionsEnum): void => {
    setIsExpanded(false);

    if (action !== NavConfigActionsEnum.CLOSE) {
      setAction(action);
    }
  }

  return (
    <NavContext.Provider value={{ action, isExpanded, onExpand, onChangeAction }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav(): NavContextType {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useNav must be used within the NavProvider");
  }

  return context;
}