// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Oleh",
//   age: 30,

//   greet(phrase: string) {
//     console.log(phrase + ", " + this.name);
//   },
// };

// user1.greet("Hi there");

// =======================================================

// interface Greetable {
//   name: string;

//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ", " + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Oleh");

// user1.greet("Hi there");

// -----------------------------------------------------
// Read only properties

// interface Greetable {
//   readonly name: string;

//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ", " + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Oleh");

// user1.greet("Hi there");

// ----------------------------------------------
// interface inheritance

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ", " + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Oleh");

// user1.greet("Hi there");

// ===========================================
// FUNCTION TYPE INTERFACES

// type AddFn = (n1: number, n2: number) => number;

// interface AddFn {
//   (n1: number, n2: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ", " + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Oleh");

// user1.greet("Hi there");

// =============================================================
// OPTIONAL PARAMETRS AND PROPERTIES

// interface AddFn {
//   (n1: number, n2: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// interface Named {
//   readonly name?: string;
//   outputName?: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name?: string;
//   age = 30;

//   constructor(name?: string) {
//     if (name) {
//       this.name = name;
//     }
//   }

//   greet(phrase: string) {
//     if (this.name) {
//       console.log(phrase + ", " + this.name);
//     } else {
//       console.log("Hello, guest");
//     }
//   }
// }

// let user1: Greetable;

// user1 = new Person();

// user1.greet("Hi there");
