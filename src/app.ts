class Department {
  // name: string = "InitialName";
  // private employees: string[] = [];
  protected employees: string[] = [];

  // you can initialize private/public properties and readonly in constructor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // creating static method
  static createEmployee(name: string) {
    return { name };
  }

  // creating abstract method
  describe(this: Department) {
    console.log(`Department ${this.id} ${this.name}`);
  }

  addEmpoyee(employee: string) {
    this.employees.push(employee);
  }

  printEmloyeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// static method
const employee1 = Department.createEmployee("Dasha");
console.log(employee1.name);

class ItDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ItDepartment("d1", ["Oleh", "Daria"]);

it.describe();

it.addEmpoyee("Oleh");
it.addEmpoyee("Daria");
it.printEmloyeeInfo();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Acoounting");
    this.lastReport = reports[0];
  }

  addEmpoyee(name: string) {
    if (name === "Oleh") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "second report";
console.log(accounting.mostRecentReport);
accounting.addReport("newReport");
accounting.printReports();

// const accountingCopy = {
//   name: "Dummy",
//   describe: accounting.describe,
// };

// accountingCopy.describe();
