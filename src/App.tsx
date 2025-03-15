import { useState } from "react";
import { PhoneContent, PhoneLayout, PhoneSidebar } from "./layouts/PhoneLayout";
import { NavConfigActionsEnum } from "./config/NavConfig";
import GeneratePage from "./pages/Generate";
import PalettesPage from "./pages/Palettes";

export default function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [pageAction, setPageAction] = useState<NavConfigActionsEnum>(NavConfigActionsEnum.GENERATE);

  // don't sit well with me, will get back to this
  const actionHandler = (action: NavConfigActionsEnum) => {
    setIsExpanded(false);

    if (action !== NavConfigActionsEnum.CLOSE) {
      setPageAction(action);
    }
  }

  const renderContentPage = () => {
    if (pageAction === NavConfigActionsEnum.GENERATE) {
      return <GeneratePage />
    }

    if (pageAction === NavConfigActionsEnum.SAVELIST) {
      return <PalettesPage />
    }
  }

  return (
    <PhoneLayout>
      <PhoneSidebar
        onNavChange={actionHandler}
        isExpanded={isExpanded}
      />
      <PhoneContent isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
        {renderContentPage()}
      </PhoneContent>
    </PhoneLayout>  
  );
}
