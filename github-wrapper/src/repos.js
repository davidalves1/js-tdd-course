import config from '../config';
import { toJson } from './utils';

export const getUserRepos = username =>
  fetch(`${config.GITHUB_URL}/users/${username}/repos`).then(toJson)
