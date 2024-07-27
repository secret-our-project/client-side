import { vars } from '@sos/style-tokens';
import { style } from '@vanilla-extract/css';

export const blockStyle = style({
  width: '100px',
  height: '100px',
  backgroundColor: vars.color.$palette.blue[100],
  color: vars.color.$palette.blue[900],
});
