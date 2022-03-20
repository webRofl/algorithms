export const binarySearch = (array, item) => {
  let hight = array.length - 1;
  let low = 0;
  while (low <= hight) {
    const middle = Math.ceil((low + hight) / 2);
    const guess = array[middle];
    if (guess === item) return middle;
    if (guess > item) {
      middle = hight - 1;
    } else {
      middle = low + 1;
    }
  }
  return null;
};

export const selectionSort = (array) => {
  const arrayCopy = [...array];
  const newArr = [];
  const findSmallest = (array) => {
    let smallest = array[0];
    let smallestIndex = 0;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] < smallest) {
        smallest = array[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  };
  for (let i = 0; i < array.length; i += 1) {
    const smallest = findSmallest(arrayCopy);
    newArr.push(arrayCopy.splice(smallest, 1)[0]);
  }
  return newArr;
};

export const fact = (num) => {
  if (num === 1) return 1;
  return num * fact(num - 1);
};

export const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivotIndex = Math.ceil((array.length - 1) / 2);
  const pivot = array[pivotIndex];
  const lower = [];
  const greater = [];
  for (let i = 0; i < pivotIndex; i += 1) {
    const item = array[i];
    if (item < pivot) {
      lower.push(item);
    } else {
      greater.push(item);
    }
  }
  for (let i = pivotIndex + 1; i < array.length; i += 1) {
    const item = array[i];
    if (item < pivot) {
      lower.push(item);
    } else {
      greater.push(item);
    }
  }
  return quickSort(lower).concat(pivot, quickSort(greater));
};

export const voted = (name, hash) => {
  if (hash.hasOwnProperty(name)) {
    return false;
  } else {
    hash[name] = true;
    return true;
  }
};

export const addToQueue = (array, queue) => {
  const queueCopy = [...queue];
  for (let i = 0; i < array.length; i += 1) {
    queueCopy.push(array[i]);
  }
  return queueCopy;
};

export const isSeller = (person) => person.match(/^o.*n$/i);

export const breathFirstSearch = (graph, searchQueue, startPoint) => {
  searchQueue = addToQueue(graph[startPoint], searchQueue);
  const searched = [];
  while (searchQueue.length !== 0) {
    const person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (isSeller(person)) return person;
      searched.push(person);
      searchQueue = addToQueue(graph[person], searchQueue);
    }
  }
  return null;
};

export const findLowestNode = (costs, processed) => {
  let smallest = Infinity;
  let smallestIndex = null;
  for (const node in costs) {
    if (costs[node] < smallest && !processed.includes(node)) {
      smallest = costs[node];
      smallestIndex = node;
    }
  }
  return smallestIndex;
};

export const findLowestWay = (graph, parents, costs) => {
  const processed = [];
  let node = findLowestNode(costs, processed);
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (const n in neighbors) {
      const newCost = cost + neighbors[n];
      if (newCost < costs[n]) {
        parents[n] = node;
        costs[n] = newCost;
      }
    }
    processed.push(node);
    node = findLowestNode(costs, processed);
  }
  return costs.fin;
};
