let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 },
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};
const companyFunctions = {
  collectEmployeeData(el) {
    const result = [];
    const values = Object.values(el);
    values.forEach((element) => {
      if (Array.isArray(element)) result.push(element);
      if (typeof element === 'object' && !Array.isArray(element))
        result.push(this.collectEmployeeData(element));
    });
    return result.flat(Infinity).filter((el) => typeof el === 'object');
  },

  countSalary(input) {
    const salaries = input.map((el) => el.salary);
    return salaries.reduce((acc, el) => {
      return acc + el;
    });
  },
};

console.log(companyFunctions.collectEmployeeData(company));

console.log(
  companyFunctions.countSalary(companyFunctions.collectEmployeeData(company))
);
