import { useRef, useState } from "react";

import { IconButton } from "../components/IconButton";
import { Typography } from "../components/Typography";

import IconUpload from '../assets/icons/ic-upload.svg';
import IconRefresh from '../assets/icons/ic-refresh.svg';
import { Logo } from "../components/Logo";


export default function GeneratePage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSelectImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      setLoading(true)
      setImage(file);
      

      setTimeout(() => {
        setPreview(URL.createObjectURL(file));
        setLoading(false);
      }, 500);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (

    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageSelection}
        className="hidden"
      />

      {image && (
        <div className="h-[18rem] w-[18rem] bg-violet-400 rounded-2xl p-[0.625rem] flex items-center justify-center">
          {loading && (
            <Logo className="h-5 w-5 animate-spin" />
          )}
          
          {!loading && preview && (
            <img className="w-full h-full object-contain rounded-lg" src={preview} alt="image to process" />
          )}
        </div>
      )}

      <div className="flex items-center justify-center gap-2">
        {image && (
          <IconButton className="rounded-full bg-purple-500 !py-[0.5rem]" icon={IconRefresh} onClick={onSelectImage}>
            <Typography>Generate</Typography>
          </IconButton> 
        )}
        
        <IconButton className="rounded-full bg-gray-300 !py-[0.5rem]" icon={IconUpload} onClick={onSelectImage}>
          <Typography className="!text-gray-500">{!image ? 'Upload' : 'Replace'}</Typography>
        </IconButton>
      </div>
      
    </div>
  )
}