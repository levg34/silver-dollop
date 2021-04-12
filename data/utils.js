import data from './data.json'

const { users } = data

function getNotesForUser(name) {
    return users[name] ? users[name].notes : []
}

function getUserList() {
    return Object.keys(users)
}

export { getNotesForUser, getUserList }