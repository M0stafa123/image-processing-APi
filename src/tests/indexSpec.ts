import path from 'path';
import resizer from '../resizer';
import fs from 'fs';
import { response } from 'express';

it('testing status to be 200', () => {
  expect(response.statusCode).toEqual(200);
});

describe('check the img proccing from old path  to the resized path', () => {
  const old = `${path.join(__dirname, '../../images/fjord.jpg')}`;
  const resized = `${path.join(__dirname, '../../images/resized/')}`;
  const a = `${path.join(__dirname, '../../images/resized/fjord_100_100.jpg')}`;
  const b = `${path.join(__dirname, '../../images/resized/wrongname_100_100.jpg')}`;
  it('resizing completed', async () => {
    await expectAsync(resizer(old, 100, 100, resized)).toBeResolved;
  });

  it('in resized folder', async () => {
    await expect(fs.existsSync(a)).toBeTrue;
  });
  it('not in resized folder', async () => {
    await expect(fs.existsSync(b)).toBeFalse;
  });
});
