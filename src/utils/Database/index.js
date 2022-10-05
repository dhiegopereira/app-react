let db = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Doe', email: 'doe@example.com' },
    { name: 'Zuck ', email: 'zuck@example.com'}
  ];
  
export function getUsers() {
    return db
}

export function createUser(data) {
    db.push(data);
}
