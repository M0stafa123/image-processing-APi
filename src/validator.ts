import { NextFunction, Request, Response } from 'express';
const pattern = /^-?\d+\.?\d*$/;

export default {
  validator(req: Request, res: Response, next: NextFunction) {
    const filename: string = req.query.filename as string;
    // const w = parseInt(req.query.width as string);
    const w = req.query.width as string;

    const h = req.query.height as string;

    if (!filename) {
      return res.send('please write a filename');
    }

    if (parseInt(w as string) <= 0 || !pattern.test(w)) {
      return res.send('please write valid width value');
    }
    if (parseInt(h as string) <= 0 || !pattern.test(h)) {
      return res.send('please write valid height value');
    }

    next();
  }
};
