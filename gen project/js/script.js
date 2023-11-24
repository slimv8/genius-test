// // // // // let name = "Іван";
// // // // // let city = "Київ";
// // // // // city = name;
// // // // // console.log(city);
// // // // // console.log(Math.max(10, 20, 30));
// // // // // console.log(Math.random() * (4 - 2) + 2);
// // // // // const message = "Welcome to Bahamas!";
// // // // // console.log(message.length);
// // // // // console.log(message.toUpperCase());
// // // // // let user = {};
// // // // // user.name = "Viola";
// // // // // user.age = 23;
// // // // // user.city = "Cherkassy";
// // // // // console.log(user);
// // // // // delete user.city;
// // // // // user["like flowers"] = true;
// // // // // console.log(user);
// // // // // for (key in user) {
// // // // //     console.log(key);
// // // // //     console.log(user[key]);
// // // // // }
// // // // // const message = "Welcome Viola Bakery";
// // // // // alert(message);
// // // // // console.log(message);

// // // // // const isConfirm = confirm("please choose");
// // // // // console.log(isConfirm);
// // // // // const test = confirm("yes or no");
// // // // // console.log("test");
// // // // // const username = prompt("please enter name");
// // // // // console.log("username");

// // // // // value = "123";
// // // // // console.log(typeof value);
// // // // // const newValue = Number(value);
// // // // // console.log(typeof newValue);

// // // // // console.log(6 < 3);
// // // // // console.log(6 > 3 && 5===5);

// // // // if (5 - 5 === 10) { console.log("hello Viola"); }
// // // // else { console.log("bye"); }

// // // // 4 === 4 ? console.log("hel") : console.log("Viola");

// // // // let num = 9;
// // // // switch (num) {
// // // //     case 0:
// // // //         console.log("0");
// // // //         break;
// // // //     case 9:
// // // //         console.log("9");
// // // //         break;
// // // // }

// // // // const min = prompt("Введіть хвилину");
// // // // if (min >= 0 && min <= 14) {
// // // //     console.log("перша чверть")
// // // // } else if (min >= 15 && min <= 29) {
// // // //     console.log("друга чверть")
// // // // // }
// // // // const value = prompt("Назва товару").toLowerCase();
// // // // let cost;

// // // // switch (value) {
// // // //     case "apple":
// // // //         cost = 10;
// // // // alert(` ${value} costed ${cost} uah`);
// // // //         break;
// // // //     case "nipple":
// // // //         cost = 20;
// // // //         break;
// // // //     default: alert(` ${value} not present`)
// // // //         alert(` ${value} costed ${cost} uah`);
// // // // }
// // // // alert(` ${value} costed ${cost} uah`);


// // // // let summ = 0;
// // // // while (true) {
// // // //     let value = +prompt("enter number");
// // // //     if (!value) break;
// // // //     summ += value;
// // // // }
// // // // // console.log("summ",summ);

// // // // for (let i = 0; i < 10; i++){
// // // //     if (i % 2 === 0) continue;
// // // //     console.log(i);

// // // // }

// // // // let arr = "west"; "east"; "wgre";
// // // // arr.push("234");
// // // // arr.pop();
// // // // // console.log(arr);

// // // // for (let i = 0; i < arr.lenght; i++) {
// // // //     console.log(arr[i]);
// // // // }

// // // // let matrix = [
// // // //     [1, 2, 3],
// // // //     [4, 5, 6],
// // // //     [7, 8, 9],
// // // // ];
// // // // console.log(matrix);

// // // let a = 5;
// // // let b = a;
// // // a = 10;
// // // console.log(a);

// // // let arr = [1, 2, 3];
// // // let arr2 = arr;
// // // arr.push(4);
// // // console.log(arr2);

// // let arr = ["a", "b", "c", "d"];
// // delete arr[2];
// // arr.splice(3, 1);
// // let a = [1, 2, 3];
// // arr.concat(a);
// // console.log(arr.concat(a));

// const fruits = [{ id:0, name: "app" },
// { id:1, name: "bob" },
// { id:2, name: "gug" },
// ];
// console.log(fruits.find((item) => item.id === 2));
// let result = fruits.map(item => item.name.length);
// console.log(result);

// let names = "ola,ula,ela";
// let arr = names.split(", ");
// let newString = arr.join(" +");

// console.log(newString);
