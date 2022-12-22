import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resizer from '../../resizer';
import validator from '../../validator';
const apiroute = express.Router();

apiroute.get('/api/images', validator.validator, async (req: Request, res: Response): Promise<void> => {
  const filename: string = req.query.filename as string;
  const w: number = parseInt(req.query.width as string);
  const h: number = parseInt(req.query.height as string);

  const old = `${path.join(__dirname, '../../../images/' + filename + '.jpg')}`;
  const resized = `${path.join(__dirname, '../../../images/resized/' + filename + '_' + w + '_' + h + '.jpg')}`;
  // getting the img from the folder
  try {
    await fs.promises.readFile(old, 'utf-8');
  } catch (err) {
    res.status(401).send('invalid file name');
  }
  if (fs.existsSync(resized) === true) {
    res.sendFile(`${path.join(__dirname, '../../../images/resized/' + filename + '_' + w + '_' + h + '.jpg')}`);
    console.log(`image with resolution ${w}_width and ${h}_height was already resized `);
    return;
  } else {
    try {
      await resizer(old, w, h, resized);
      res.status(200).sendFile(resized);
    } catch (err) {
      res.status(402).send('problem resizing the image ');
    }
  }
});

export default apiroute;
