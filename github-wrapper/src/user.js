import config from '../config'
import { toJson } from './utils'

export const getUser = (username) =>
  fetch(`${config.GITHUB_URL}/users/${username}`).then(toJson)

