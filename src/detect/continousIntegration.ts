import { doesFileExists } from 'src/helpers/getFile';

export default () =>
  doesFileExists('./.travis.yml') || doesFileExists('./.jenkins');
