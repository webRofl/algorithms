import {
  binarySearch,
  selectionSort,
  fact,
  quickSort,
  voted,
  isSeller,
  addToQueue,
  breathFirstSearch,
  findLowestNode,
  findLowestWay,
} from '../src/index';

const sortTestArray = [0, 1, 2, 3, 4, 5, 6];

const testArray = [23423, 67567, 213, 0, 45, -435, -6754, 3452345];

test('binarySearch', () => {
  expect(binarySearch(sortTestArray, 3)).toBe(3);
});

test('selectionSort', () => {
  expect(selectionSort(testArray)).toStrictEqual([
    -6754, -435, 0, 45, 213, 23423, 67567, 3452345,
  ]);
});

test('fact', () => {
  expect(fact(5)).toBe(120);
});

test('quickSort', () => {
  expect(quickSort(testArray)).toStrictEqual([
    -6754, -435, 0, 45, 213, 23423, 67567, 3452345,
  ]);
});

const hash = {};

test('hash', () => {
  expect(voted('mike', hash)).toBe(true);
  expect(voted('nike', hash)).toBe(true);
  expect(voted('mike', hash)).toBe(false);
});

const graph1 = {
  you: ['mina', 'mike', 'luna', 'elips'],
  mina: [],
  mike: ['close'],
  luna: [],
  elips: ['open'],
  close: [],
  open: [],
};

let searchQueue = [];

test('breathFirstSearch', () => {
  expect(isSeller('open')).toBeTruthy();
  expect(isSeller('close')).not.toBeTruthy();
  expect(addToQueue(['mina', 'mike', 'luna', 'elips'], [])).toStrictEqual([
    'mina',
    'mike',
    'luna',
    'elips',
  ]);
  expect(breathFirstSearch(graph1, searchQueue, 'you')).toBe('open');
});

const graph2 = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
};

const parents = {
  a: 'start',
  b: 'start',
  fin: null,
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

test('djikstra', () => {
  expect(findLowestNode(costs, [])).toBe('b');
  expect(findLowestWay(graph2, parents, costs)).toBe(6);
});
