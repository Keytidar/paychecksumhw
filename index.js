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

  salaryCounter() {
    let allEmployees = [
      ...this.sales,
      ...this.development.web,
      ...this.development.internals,
    ];
    let allSalaries = allEmployees.map(el => el.salary);
    return allSalaries.reduce((acc, el) => {
      return acc + el;
    });
  },
};

console.log(company.salaryCounter());
