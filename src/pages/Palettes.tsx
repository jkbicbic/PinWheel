import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { Typography } from "../components/Typography";
import { useNav } from "../context/Nav";
import { IconButton } from "../components/IconButton";

import IconRefresh from '../assets/icons/ic-refresh.svg';
import { NavConfigActionsEnum } from "../config/NavConfig";

interface SavedPalette {
  name: string;
  palette: string[];
}

export default function PalettesPage() {
  const { onChangeAction } = useNav();
  const [palettes, setPalettes] = useState<SavedPalette[]>([]);

  useEffect(() => {
    const savedPalettes = localStorage.getItem('saved_palettes');

    if (savedPalettes) {
      setPalettes(JSON.parse(savedPalettes) as SavedPalette[]);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-wrap py-[2rem]">
      {palettes.length < 1 && (
        <div className="flex flex-col items-center gap-5 w-full">
          <Typography className="text-center align-self-center justify-self-center h-fit !text-gray-500">No Saved Palettes</Typography>
          <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconRefresh} onClick={() => onChangeAction(NavConfigActionsEnum.GENERATE)}>
            <Typography>Generate Palette</Typography>
          </IconButton>
        </div>
      )}
      {palettes.map((item) => (
        <div key={JSON.stringify(item.palette)} className="flex flex-col items-center justify-center h-fit w-1/2 p-[1rem] cursor-pointer">
          <Logo
            className="h-10 w-10 mb-10 cursorpointer"
            colorPaths={item.palette}
          />
          <Typography className="w-full !text-gray-500 truncate text-ellipsis">{item.name}</Typography>
        </div>
      ))}
    </div>
  )
}