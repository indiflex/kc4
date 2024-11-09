import { time1, time2, time3, timePromi } from '../hello';

describe('hello', () => {
  beforeEach(() => {
    console.log('BEFORE EACH!!!!!!!!!');
  });
  afterEach(() => {
    console.log('AFTER EACH!!!!!!!!!');
    jest.clearAllMocks();
  });
  describe('mock', () => {
    const user = {
      id: 1,
      name: 'Hong',
      getName(n: number) {
        return `${this.name}-${n}`;
      },
    };
    const spy = jest.spyOn(user, 'getName');
    user.getName(1);
    expect(user.getName).toHaveBeenCalled();
    expect(user.getName).toHaveBeenCalledWith(1);

    // jest.mock('axio', () => {
    //   defaults: {
    //     get: jest.fn().mockResolvedValue({ id: 1 });
    //   }
    // });

    const pow = jest.fn(a => 100);
    expect(pow(3)).toBe(100);
  });

  describe('promise', () => {
    test('timePromi-1', done => {
      timePromi(2)
        .then(res => {
          expect(res).toBe(3);
          // console.log('*********');
          done();
        })
        .catch(err => {
          console.error('ERR>>', err);
        });
    });
    test('timePromi-2', async () => {
      try {
        const res = await timePromi(1);
        expect(res).toBe(3);
      } catch (err) {
        // console.error('ERR>>', err);
        expect(err).toBe('OddNumber:1');
      }
    });

    test('timePromi-3', done => {
      expect(timePromi(2)).resolves.toBe(3);
      expect(timePromi(1)).rejects.toBe('OddNumber:1').finally(done);
    });
  });

  test('time', () => {
    const f = () => console.log('time in test!!');
    // expect(time2()).toBe(1);
    // const spy = jest.spyOn();
    // time2(f);
    expect(time1()).toContain(1);
    expect(time1()).toEqual([1, 2, 3]);
    expect(time1()).toEqual(expect.arrayContaining([1, 3]));

    expect(() => {
      time2(2);
    }).toThrow(/Error/);
    expect(() => {
      time2(4);
    }).toThrow('Time Error!');
    expect(time2(1)).toBeTruthy();
    // expect(time2()).toThrow(Error('Time Error!'));

    expect(time3(1)).toEqual({ id: 1, name: 'Hong', addr: { city: 'Seoul' } });
    expect(time3(1)).toHaveProperty('name');

    expect(time3(2)).toEqual({ id: 1, name: 'Hong' });
    expect(time3(2)).toStrictEqual({ id: 1, name: 'Hong', addr: undefined });
    expect(time3(2)).toHaveProperty('addr');
    expect(time3(2).name).toMatch(/ong/);
    expect(time3(2)).toMatchObject({ name: 'Hong' });

    const timeX = jest.fn(cb => cb());
    timeX(f);
    expect(timeX).toHaveBeenCalled();
    // expect(time2).toHaveBeenCalled();
    // expect(time).toHaveBeenCalledTimes(1);
    // expect(time).toHaveBeenCalledWith(f);
  });
});
