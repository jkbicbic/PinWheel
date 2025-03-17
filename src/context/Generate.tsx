import { createContext, Dispatch, PropsWithChildren, RefObject, SetStateAction, useContext, useRef, useState } from "react";
import { Logo } from "../components/Logo";

interface GenerateContextType {
  image: File | null;  
  setImage: Dispatch<SetStateAction<File | null>>; 
  preview: string | null;
  setPreview: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
  palette: string[] | null;
  setPalette: Dispatch<SetStateAction<string[] | null>>;
  selectedHex: string | null;
  setSelectedHex: Dispatch<SetStateAction<string | null>>;
  setInitialState: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
}

const GenerateContext = createContext<GenerateContextType | undefined>(undefined);

export function GenerateProvider({ children }: PropsWithChildren) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [palette, setPalette] = useState<string[] | null>(null);
  const [selectedHex, setSelectedHex] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  
  const setInitialState = (): void => {
    setImage(null);
    setPreview(null);
    setLoading(false);
    setIsGenerating(false);
    setPalette(null);
  }

  return (
    <GenerateContext.Provider
      value={{
        image,
        setImage,
        preview,
        setPreview,
        loading,
        setLoading,
        isGenerating,
        setIsGenerating,
        palette,
        setPalette,
        selectedHex,
        setSelectedHex,
        setInitialState,
        fileInputRef
      }}
    >
        <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
          {isGenerating && <Logo className="h-10 w-10 animate-spin [&>path]:fill-purple-500" /> }
          {children}
        </div>
    </GenerateContext.Provider>
  );
}

export function useGenerate(): GenerateContextType {
  const context = useContext(GenerateContext);

  if (!context) {
    throw new  Error('useGenerate must be used within the Generate Provider');
  }

  return context;
}