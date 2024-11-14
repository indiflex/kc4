import { fetchUsers, saveUser, deleteUser } from './fetch';

const HONG = { id: 1, name: 'Hong', email: 'hong@gmail.com' };
const KIM = { id: 2, email: 'kim@gmail.com', name: 'Kim' };
const KIM2 = { id: 2, email: 'new@gmail.com', name: 'newKim' };

// jest.mock('./fetch', () => ({
//   fetchUsers: () => afterPostUsers,
//   saveUser: () => KIM,
// }));

describe('fetch - /users', () => {
  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([HONG]);
  });

  test('users - post', async () => {
    const name = KIM.name;
    const email = KIM.email;
    const user = await saveUser({ name, email, id: 0 });
    expect(user).toEqual(KIM);
  });

  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([HONG, KIM]);
    // expect(users).toBeUndefined();
    // expect(users).toBe(undefined);
  });

  test('users - patch', async () => {
    const email = KIM2.email;
    const name = KIM2.name;
    const user = await saveUser({ name, email, id: 2 });
    expect(user).toEqual(KIM2);
  });

  test('users - get - afterPatch', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([HONG, KIM2]);
  });

  test('users - delete', async () => {
    const user = await deleteUser(KIM.id);
    expect(user).toEqual({ message: 'OK' });
  });

  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([HONG]);
  });
});
