/* tslint:disable:no-unused-variable */

import { OrderByPipe } from './orderBy.pipe';

describe('Pipe: OrderBye', () => {
  let pipe: OrderByPipe;
  let arr: Array<any>;

  beforeEach(() => {
    pipe = new OrderByPipe();
    arr = [
      {
        createdAt: '2022-04-10T15:32:52.087Z',
        name: 'bb',
        type: 'bb',
        histories: [],
        id: '2',
      },
      {
        createdAt: '2022-04-11T01:53:36.735Z',
        name: 'aa',
        type: 'aa',
        histories: [],
        id: '3',
      },
      {
        createdAt: '2022-04-11T10:16:18.271Z',
        name: 'cccc',
        type: 'cccc',
        histories: [],
        id: '4',
      },
    ];
  });

  it('create an instance', () => {
    let pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display the strengh with sufix `weak` when between 0 and 10', () => {
    const expectArrA = [
      {
        createdAt: '2022-04-11T01:53:36.735Z',
        name: 'aa',
        type: 'aa',
        histories: [],
        id: '3',
      },
      {
        createdAt: '2022-04-10T15:32:52.087Z',
        name: 'bb',
        type: 'bb',
        histories: [],
        id: '2',
      },
      {
        createdAt: '2022-04-11T10:16:18.271Z',
        name: 'cccc',
        type: 'cccc',
        histories: [],
        id: '4',
      },
    ];

    const expectArrB = [
      {
        createdAt: '2022-04-10T15:32:52.087Z',
        name: 'bb',
        type: 'bb',
        histories: [],
        id: '2',
      },
      {
        createdAt: '2022-04-11T01:53:36.735Z',
        name: 'aa',
        type: 'aa',
        histories: [],
        id: '3',
      },
      {
        createdAt: '2022-04-11T10:16:18.271Z',
        name: 'cccc',
        type: 'cccc',
        histories: [],
        id: '4',
      },
    ];
    expect(pipe.transform(arr, 'name')).toEqual(
      expect.arrayContaining(expectArrA)
    );

    expect(pipe.transform(arr, 'id')).toEqual(
      expect.arrayContaining(expectArrB)
    );
  });
});
