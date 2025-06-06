const sharp = require('sharp');
const fs = require('fs');

const inputPath = './public/Webutsav_ITTeam.JPG';
const outputPath = './public/Webutsav_ITTeam.JPG';

async function optimizeImage() {
  try {
    await sharp(inputPath)
      .jpeg({
        quality: 82,
        mozjpeg: true,
      })
      .toFile(outputPath + '.temp');

    // Replace the original file with the optimized one
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath + '.temp', outputPath);
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
