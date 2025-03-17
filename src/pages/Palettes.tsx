import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { Typography } from "../components/Typography";

interface SavedPalette {
  name: string;
  palette: string[];
}

export default function PalettesPage() {
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
        <Typography className="text-center !text-gray-500">No Saved Palette</Typography>
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