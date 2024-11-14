import { fetchUsers, saveUser, deleteUser } from './fetch';

const KIM = { id: 2, email: 'kim@gmail.com', name: 'Kim' };
const afterPostUsers = [{ id: 1, name: 'Hong', email: 'hong@gmail.com' }, KIM];

// jest.mock('./fetch', () => ({
//   fetchUsers: () => afterPostUsers,
//   saveUser: () => KIM,
// }));

describe('fetch - /users', () => {
  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([{ id: 1, name: 'Hong', email: 'hong@gmail.com' }]);
  });

  test('users - post', async () => {
    const name = KIM.name;
    const email = KIM.email;
    const user = await saveUser({ name, email, id: 0 });
    expect(user).toEqual(KIM);
  });

  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual(afterPostUsers);
    // expect(users).toBeUndefined();
    // expect(users).toBe(undefined);
  });

  test('users - delete', async () => {
    const user = await deleteUser(KIM.id);
    expect(user).toEqual({ message: 'OK' });
  });
});
