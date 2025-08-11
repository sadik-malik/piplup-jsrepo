import fs from "fs";
import path from "path";
import process from "process";

import { fileURLToPath } from "url";

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: npm run generate:component <ComponentType> <ComponentName>");
  process.exit(1);
}

const [componentType, componentName] = args;

const paths = {
  ts: path.join(__dirname, "../src/ts-default", componentType, componentName),
};

Object.values(paths).forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = [
  path.join(paths.ts, `${componentName}.tsx`),
  path.join(paths.ts, `${componentName}.css`),
];

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "");
  }
});

// eslint-disable-next-line no-console
console.log(`Component "${componentName}" structure created successfully under "${componentType}".`);
