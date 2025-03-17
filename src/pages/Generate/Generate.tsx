import { GenerateImageInput } from "./GenerateImageInput";
import { GenerateProvider } from "../../context/Generate";
import { GenerateImageContainer } from "./GenerateImageContainer";
import { GeneratePalette } from "./GeneratedPalette";
import { GenerateActions } from "./GenerateActions";

export default function GeneratePage() {
  return (
    <GenerateProvider>
      <GenerateImageInput />
      <GeneratePalette />
      <GenerateImageContainer />
      <GenerateActions />
    </GenerateProvider>
  )
}