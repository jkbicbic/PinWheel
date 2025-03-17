import { IconButton } from "../../components/IconButton";
import { Typography } from "../../components/Typography";
import { useGenerate } from "../../context/Generate";

import IconUpload from '../../assets/icons/ic-upload.svg';
import IconRefresh from '../../assets/icons/ic-refresh.svg';
import IconSave from '../../assets/icons/ic-save.svg';

import { ProcessImage } from "../../utils/PaletteExtractor";

export function GenerateActions() {
  const { loading, preview, palette, image, isGenerating, fileInputRef, setIsGenerating, setPalette, setImage, setInitialState, setPreview, setSelectedHex } = useGenerate();

  const onSelectImage = (): void => {
    fileInputRef.current?.click();
  };

  const onGeneratePallete = async (): Promise<void> => {
    try {
      setIsGenerating(true);

      if (!preview) {
        throw new Error('Image has not loaded!')
      };
      
      const pal = await ProcessImage(preview);

      setPalette(pal);
      setImage(null);
      setPreview(null);
      setIsGenerating(false);
      setSelectedHex(null);

    } catch(err) {
      console.error(err);
    }
  }

  const onSavePalette = (): void => {
    // saving of palettes here

    setTimeout(() => {
      setInitialState();
    }, 500);
  }

  if (isGenerating) return null

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
}