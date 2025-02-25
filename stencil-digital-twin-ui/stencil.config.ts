import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-digital-twin-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
