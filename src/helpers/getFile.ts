import * as fs from 'fs';
import { PackageJson } from 'package-json';

export function doesFileExists(filePath: string): boolean {
  // may add relative path here
  return fs.existsSync(filePath);
}

export function getFileContent(filePath: string): string {
  // may add relative path here
  return fs.readFileSync(filePath, { encoding: 'utf8' });
}

export function getJsonContent(filePath: string): object {
  // may add relative path here
  return JSON.parse(fs.readFileSync(filePath, { encoding: 'utf8' }));
}

export function getPackageJson(): PackageJson {
  return getJsonContent('./package.json');
}
