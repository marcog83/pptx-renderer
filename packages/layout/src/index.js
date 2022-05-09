import { resolveLayout } from './layout';
import { resolveAssets } from './assets/resolveAssets';
import { asyncCompose } from './utils/asyncCompose';

export const getLayout = asyncCompose(
  resolveLayout,
  resolveAssets
);
