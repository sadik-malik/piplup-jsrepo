import fs from 'fs';
import path from 'path';

const TEMPLATE_FILE_PATH = './public/README.md';

const registries = [
  {
    description: 'This registry contains the TypeScript variant of the tailwind registry.',
    registry: 'ts/default',
  },
];

const templateFileContent = fs.readFileSync(TEMPLATE_FILE_PATH).toString();

for (const { description, registry } of registries) {
  const dir = path.join('./public', registry);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const dest = path.join(dir, 'README.md');

  const newContent = `${templateFileContent}\n\n${description}\n`;

  // eslint-disable-next-line no-console
  console.info(`Writing ${dest}`);

  fs.writeFileSync(dest, newContent);
}
