import { useState } from "react";
import { PhoneContent, PhoneLayout, PhoneSidebar } from "./PhoneLayout";


export function AppLayout() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <PhoneLayout>
      <PhoneSidebar isExpanded={isExpanded} />
      <PhoneContent isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
        <p>test</p>
      </PhoneContent>
    </PhoneLayout>  
  );
}
