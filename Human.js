class Human {
  gender;
  age;
  balance;

  constructor(gender) {
    if (gender != "male" || gender !== "female") {
      this.gender = gender;
    } else {
      throw new Error("Invalid gender");
    }
    this.age = 0;
  }

  eat() {
    console.log("inside eat");
  }
}

let alabi = new Human("cool");
console.log(alabi.gender);
alabi.eat();

let emman = {
  name: "emman",
};

let chigozie = {
  gender: "male",
};

let janet = {
  age: 16,
};

let favour = new Human("male");
favour.age = 16;
let blessing = new Human("female");
let niyi = new Human("male");
console.log(favour.gender, favour.age, favour.balance);
//console.log(emman.gender, chigozie.gender, janet.gender);
