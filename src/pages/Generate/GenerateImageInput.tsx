import { ChangeEvent } from "react";
import { useGenerate } from "../../context/Generate";

export function GenerateImageInput() {
  const { fileInputRef, setLoading, setImage, setPalette, setPreview } = useGenerate();

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

  return (
    <input
      type="file"
      accept="image/*"
      ref={fileInputRef}
      onChange={handleImageSelection}
      className="hidden"
    />
  );
}