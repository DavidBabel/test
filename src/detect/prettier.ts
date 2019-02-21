import { getPackageJson } from 'src/helpers/getFile';

export default () => {
  const packageJson = getPackageJson();
  if (packageJson) {
    const devDep = packageJson.devDependencies;

    return devDep && typeof devDep.prettier === 'undefined';
  }
  return false;
};
