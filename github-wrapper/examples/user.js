global.fetch = require('node-fetch')

import { searchUser } from '../src/app'

const user = searchUser('davidalves1')

user.then(data => console.log(data))
