function pow1(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow1(2, 3));

function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}

console.log(pow2(2, 4));

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: {
      siteA: [
        {
          name: "Peter",
          salary: 2000,
        },
        {
          name: "Alex",
          salary: 1800,
        },
      ],

      siteB: [
        {
          name: "Peter",
          salary: 2000,
        },
        {
          name: "Alex",
          salary: 1800,
        },
      ],
    },

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumto1(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumto1(100));
console.log(sumTo(100));

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

function printList1(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

function printReverseList1(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
