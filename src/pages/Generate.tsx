import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";

import { IconButton } from "../components/IconButton";
import { Typography } from "../components/Typography";
import { Logo } from "../components/Logo";

import IconUpload from '../assets/icons/ic-upload.svg';
import IconRefresh from '../assets/icons/ic-refresh.svg';
import IconSave from '../assets/icons/ic-save.svg';

export default function GeneratePage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isPaletteGenerated, setIsPalleteGenerated] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSelectImage = (): void => {
    fileInputRef.current?.click();
  };

  const handleImageSelection = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      setLoading(true)
      setImage(file);
      setIsPalleteGenerated(false);
      
      setTimeout(() => {
        setPreview(URL.createObjectURL(file));
        setLoading(false);
      }, 500);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const renderImage = (): ReactNode => {
    let imgContent = <Logo className="h-5 w-5 animate-spin" />;

    if (!loading && preview) {
      imgContent = (
        <img className="w-full h-full object-contain rounded-lg" src={preview} alt="image to process" />
      );
    }

    if (image) {
      return (
        <div className="h-[18rem] w-[18rem] bg-violet-400 rounded-2xl p-[0.625rem] flex items-center justify-center">
          {imgContent}
        </div>
      );
    }

    return null;
  }
  // COMMENT: wierd looking, should update this
  const onGeneratePallete = (): void => {
    setIsGenerating(true);
  }

  const renderActions = (): ReactNode => (
    <div className="flex items-center justify-center gap-2">
      {image && (
        <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconRefresh} onClick={onGeneratePallete}>
          <Typography>Generate</Typography>
        </IconButton> 
      )}

      {isPaletteGenerated && (
        <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconSave} onClick={() => console.log('save palette')}>
          <Typography>Save</Typography>
        </IconButton> 
      )}
      
      <IconButton className="rounded-full bg-gray-300 !py-[0.5rem]" icon={IconUpload} onClick={onSelectImage}>
        <Typography className="!text-gray-500">{!image ? 'Upload' : 'Replace'}</Typography>
      </IconButton>
    </div>
  )

  useEffect(() => {
    // mocked generating palette
    if (isGenerating) {
      setTimeout(() => {
        setIsPalleteGenerated(true);
        setImage(null);
        setIsGenerating(false);
      }, 4000)
    }
  }, [isGenerating])

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
      {isPaletteGenerated && <Logo className="[&>path]:fill-purple-500 mb-10" />}
      {!isGenerating && !isPaletteGenerated && renderImage()}
      {!isGenerating && renderActions()}
    </div>
  )
}