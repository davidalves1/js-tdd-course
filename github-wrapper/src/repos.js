import env from '../config/env';

export const getUserRepos = username =>
  fetch(`${env.GITHUB_URL}/users/${username}/repos`)
