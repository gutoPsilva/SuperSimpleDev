let a = "My name is";
let b = "Gustavo";
let c = "My name is " + "Gustavo"; // = `${a} + ${b}`;
let d = "Total cost: $" + (5 + 3);
let e = `Total cost: $${5+3}`;
let f = window.alert(`Total cost: $${5+3}`);
let g = "Total cost: $" + (599 + 295) / 100;
let h = `Total cost: $${(599+295) / 100}`;
let i = window.alert(`Total cost: $${(599+295) / 100}`);
let j = alert(`Total cost: $${(599+295) / 100};
        Thank you, come again!`); // multi-line string
let k = `Items (${(2 + 2)}): $${(2095 * 2 + 799 * 2) / 100}`;
let l = `Shipping & handling: $${(499 + 499)/100}`;
let m = `Total before tax: $${(2095 * 2 + 799 * 2) / 100 + (499 + 499)/100}`;
let n = `Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`;