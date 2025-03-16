import { useState } from "react";
import { PhoneContent, PhoneLayout, PhoneSidebar } from "./layouts/PhoneLayout";
import { NavConfigActionsEnum } from "./config/NavConfig";
import GeneratePage from "./pages/Generate";
import PalettesPage from "./pages/Palettes";
import { useNav } from "./context/Nav";

export default function App() {
  const { action }= useNav();

  const renderContentPage = () => {
    if (action === NavConfigActionsEnum.GENERATE) {
      return <GeneratePage />
    }

    if (action === NavConfigActionsEnum.SAVELIST) {
      return <PalettesPage />
    }
  }

  return (
    <PhoneLayout>
      <PhoneSidebar/>
      <PhoneContent>
        {renderContentPage()}
      </PhoneContent>
    </PhoneLayout>  
  );
}
