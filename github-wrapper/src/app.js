export const searchUser = (username) =>
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())

export const searchUserRepos = () => { }

