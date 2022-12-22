import sharp from 'sharp';
async function resizer(old: string, w: number, h: number, resized: string): Promise<void> {
  try {
    await sharp(old).resize(w, h).toFile(resized);
  } catch (err) {
    ('problem resizing the image reenter the properties pls');
  }
}

export default resizer;
