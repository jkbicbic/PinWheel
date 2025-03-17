import { kmeans } from "ml-kmeans";

function rgbToHex([r, g, b]: number[]): string {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

function extractPalette(rgb: number[][]): string[] {
  // Apply K-Means clustering
  const clusters = kmeans(rgb, 4, {});

  // Convert centroids back to hex
  return clusters.centroids.map(rgbToHex);
}


export function ProcessImage(imageUrl: string): Promise<string[]> {
  return new Promise((resolve, reject) => {

    // create dom elements
    const canvas = document.createElement('canvas');
    const img = new Image();

    img.src = imageUrl

    img.onload = () => {
      // set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // get canvas context
      const context = canvas.getContext('2d', { willReadFrequently: true });

      if (!context) return reject("Could not get canvas context");

      // draw image based on img data
      context.drawImage(img, 0, 0, img.width, img.height);

      // get all data at once
      const imageData = context.getImageData(0, 0, img.width, img.height).data;

      // extract pixel data from image data
      const pData: number[][] = [];
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];

        pData.push([r,g,b]);
      }

      const palette = extractPalette(pData)

      resolve(palette);
    };

    img.onerror = () => reject("Failed to load image");
  });
}