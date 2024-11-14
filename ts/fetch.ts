export type User = {
  id: number;
  name: string;
  email: string;
};

const BASE_URL = 'http://localhost:7009/users';

export async function fetchUsers() {
  const users = (await fetch(BASE_URL).then(res => res.json())) as User;

  return users;
}

export async function saveUser(user: User) {
  const newer = await fetch(BASE_URL, {
    method: user.id === 0 ? 'POST' : 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());

  return newer as User;
}

export function deleteUser(id: number) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
}

// fetchUsers().then(users => console.log('🚀  users:', users));
