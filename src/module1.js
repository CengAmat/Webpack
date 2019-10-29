// module.exports.test1 = function test1() {
//     console.log("Test 1");
// }

// module.exports.test2 = function test2() {
//     console.log("Test 2");
// }

// module.exports = {
//     name: "Amat",
//     test1: function () {
//         console.log("Test 1");
//     },
//     person: {
//         name: "Amat",
//         mail: "cengamat@gmail.com"
//     }
// }

// ES6 Modules

export const name = "Amat";
export function test() {
    console.log("Test Function");
}

export class Person {
    static Test() {
        console.log("Person Test");
    }
}

export const employee = {
    name: "Amat",
    salary: 5000
}

export class Deneme {
    static deneme() {
        console.log("Default deneme");
    }
}

const denemeVal = "Deneme Value";

export default denemeVal;