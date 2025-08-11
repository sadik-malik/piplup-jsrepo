import { defineConfig } from 'eslint/config';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createBaseConfig } from '@piplup/code-infra/eslint';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __dirname = path.dirname(__filename);

export default defineConfig({
  extends: createBaseConfig({
    baseDirectory: __dirname,
  }),
  name: 'Base config',
  rules: {
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      }
    },
    react: {
      version: 'detect',
    },
  },
});
