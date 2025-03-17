import { Logo } from "../../components/Logo";
import { useGenerate } from "../../context/Generate";

export function GenerateImageContainer() {
  const { isGenerating, palette, image, preview, loading } = useGenerate();

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
  };

  return null;
}