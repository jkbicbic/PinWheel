import { ChangeEvent, ReactNode, useRef, useState } from "react";

import { IconButton } from "../components/IconButton";
import { Typography } from "../components/Typography";
import { Logo } from "../components/Logo";

import IconUpload from '../assets/icons/ic-upload.svg';
import IconRefresh from '../assets/icons/ic-refresh.svg';
import IconSave from '../assets/icons/ic-save.svg';

const mockedPalette: string[] = [
  '#c98532',
  '#444db3',
  '#7fb364',
  '#b0a61c',
];

export default function GeneratePage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [palette, setPalette] = useState<string[] | null>(null);
  const [selectedHex, setSelectedHex] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const setInitialState = (): void => {
    setImage(null);
    setPreview(null);
    setLoading(false);
    setIsGenerating(false);
    setPalette(null);
  } 

  const onSelectImage = (): void => {
    fileInputRef.current?.click();
  };

  const handleImageSelection = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      setLoading(true)
      setImage(file);
      setPalette(null)
      
      setTimeout(() => {
        setPreview(URL.createObjectURL(file));
        setLoading(false);
      
      }, 500);

      return;
    } 

    alert("Please select a valid image file.");
  };

  const renderImage = (): ReactNode => {
    if (!isGenerating && !palette && image) {
      return (
        <div className="h-[18rem] w-[18rem] bg-violet-400 rounded-2xl p-[0.625rem] flex items-center justify-center">
          {!loading && preview ? (
            <img className="w-full h-full object-contain rounded-lg" src={preview} alt="image to process" />
          ) : (
            <Logo className="h-5 w-5 animate-spin" />
          )}
        </div>
      );
    }

    return null;
  }

  const onGeneratePallete = (): void => {
    setIsGenerating(true);

    // mocked generating pallete
    // this is where the generation
    // code should be
    setTimeout(() => {
      setPalette(mockedPalette);
      setImage(null);
      setIsGenerating(false);
    }, 4000)
  }

  const onSavePalette = (): void => {
    // saving of palettes here

    setInitialState();
  }

  const renderActions = (): ReactNode => {
    if (!isGenerating) {
      return (
        <div className="flex flex-col gap-5 justify-center">
          {!palette && !image && (
            <Typography className="!text-gray-500 text-center">
              Upload a photo to generate its palette
            </Typography>
          )}

          <div className="flex items-center justify-center gap-2">
            {image && (
              <IconButton
                className="rounded-full bg-purple-500 !py-[0.5rem]"
                icon={IconRefresh}
                onClick={onGeneratePallete}
                disabled={loading}
              >
                <Typography>Generate</Typography>
              </IconButton> 
            )}

            {palette && (
              <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconSave} onClick={onSavePalette}>
                <Typography>Save</Typography>
              </IconButton> 
            )}
            
            <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconUpload} onClick={onSelectImage}>
              <Typography>{!image ? 'Upload' : 'Replace'}</Typography>
            </IconButton>
          </div>
        </div>
      );
    };

    return null;
  }


  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageSelection}
        className="hidden"
      />

      {isGenerating && <Logo className="h-10 w-10 animate-spin [&>path]:fill-purple-500" /> }
      {palette && (
        <>
          <Logo
            className="mb-10 [&>path]:cursor-pointer"
            colorPaths={mockedPalette}
            onClickHex={(i) => setSelectedHex(i)}
          />
          <div className="flex items-center justify-center gap-2">
            <div style={{ backgroundColor: palette[selectedHex] }} className="h-5 w-5 rounded-full" />

            <Typography style={{ color: palette[selectedHex] }}>
              {palette[selectedHex]}
            </Typography>
          </div>
        </>
      )}
      {renderImage()}
      {renderActions()}
    </div>
  )
}