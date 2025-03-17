import { Logo } from "../../components/Logo";
import { Typography } from "../../components/Typography";
import { useGenerate } from "../../context/Generate";

export function GeneratePalette() {
  const { palette, selectedHex, setSelectedHex } = useGenerate();

  if (!palette) return null;

  return (
    <>
      <Logo
        className="mb-10 [&>path]:cursor-pointer"
        colorPaths={palette}
        onClickHex={(hex) => setSelectedHex(hex ||  null)}
      />
      <div className="flex items-center justify-center gap-2">
        <div style={{ backgroundColor: selectedHex || 'transparent' }} className="h-5 w-5 rounded-full" />

        <Typography style={{ color: selectedHex || 'transparent' }}>
          {selectedHex}
        </Typography>
      </div>
    </>
  );
}