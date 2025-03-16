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


export function PaletteExtractor(imageUrl: string): Promise<string[]> {
  return new Promise((resolve) => {

    // create dom elements
    const canvas = document.createElement('canvas');
    const img = document.createElement('img');

    // get context of canvas
    const context = canvas.getContext('2d', {
      willReadFrequently: true,
    });

    // apply image to img element
    img.src = imageUrl;

    // draw image in canvas
    context?.drawImage(img,0,0);
    const pData: number[][] = [];

    // loop to image pixel data
    for (let i = 1; i < img.width; i++) {
      for (let j = 1; j < img.height; j++) {
        const p: Uint8ClampedArray<ArrayBufferLike> | undefined  = context?.getImageData(i,j,1,1).data;

        // if p is not empty
        // extract rgb data and
        // add it to pData array
        if (p) {
          pData.push([p[0], p[1], p[2]]);
        }
      }
    }

    const finalPalette = extractPalette(pData);

    console.log(finalPalette);

    resolve(finalPalette);
  });
}