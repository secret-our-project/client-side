import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '@sos/style-tokens';

const shadowProperties = defineProperties({
  properties: {
    boxShadow: vars.shadow.shadow,
  },
});

export const shadowSprinkles = createSprinkles(shadowProperties);

export type ShadowSprinkles = Parameters<typeof shadowSprinkles>[0];
