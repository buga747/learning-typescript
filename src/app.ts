// // INTERSECTION TYPES
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const em1: ElevatedEmployee = {
//   name: "John Doe",
//   privileges: ["admin"],
//   startDate: new Date(),
// };

// console.log(em1);

// // ========================================================
// // TYPE GUARDS

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   // type guard below
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);
//   if ("privileges" in emp) {
//     console.log("Privilages: ", emp.privileges);
//   }
// }

// printEmployeeInfo(em1);

// // CLASSES GUARDS

// class Car {
//   drive() {
//     console.log("driving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving an truck");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function getVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }
// }

// getVehicle(v1);
// getVehicle(v2);
