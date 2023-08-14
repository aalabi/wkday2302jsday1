let human = {
  name: "John",
  age: 36,
  isMarried: true,
  height: 1.65,
  "my children": ["Chinedu", "Juan", "Favour", "Titiayo", "Aisha"],
  meal: {
    breakfast: "bean & bread",
    lunch: "eba and egusi",
    dinner: "noodles",
  },
  eat: function (food) {
    console.log(`I am eating ${food}`);
    console.log(`${this.name} eat ${this.meal.breakfast}`);
  },
};

console.log(human.name);
console.log(human["age"]);
console.log(human["my children"]);
let children = human["my children"];
for (let i = 0; i < 5; i++) {
  console.log("I am child " + (i + 1) + " " + children[i]);
}

human.eat("rice and egg");

let { name, eat } = human;
console.log(name, eat);

//console.log(typeof human);
