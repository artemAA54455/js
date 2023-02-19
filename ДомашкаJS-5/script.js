// Задача №1

// const num = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < num.length; index++) {
//     if (num[index]==0) {
//       console.log(`${num[index]} - это ноль`);  
//     } else if(num[index] % 2==0) {
//         console.log(`${num[index]} - это четное число`);
//     }
//     else 
//     console.log(`${num[index] } - это нечетное число`);  
// }
 
// Задача №2

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice (3, 2);
// console.log(array);

// Задача №3

// const digits = [];
// for ( let index = 0; index < 5; index++ ) {
//    let number = (Math.random()*10);
//     digits[index] = parseInt (number);
// }
// console.log (digits);
// let digSum = 0;
// for (let index = 0; index < digits.length; index++) {
//     digSum += digits[index];
// }
// console.log(digSum);

// let min = Math.min.apply (null, digits);
// console.log(min);

// for (let index = 0; index < digits.length; index++) {
//     if (digits[index] == 3) {
//         console.log(digits[index]);
//     }
// }

// Задача №5

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
//     }
// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }

// const post = {
//     author: "John", 
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, 
//             },
//         },
//         {
//             userId: 5, 
//             userName: "Jane",
//             text: "lorem ipsum 2",
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// const product = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ]
// product.forEach(function(item) {
//     item.price = item.price * 0.85;
// });
// console.log(product);

// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];
// let havePhotos = products.filter(products => products.photos && products.photos.length > 0);
// console.log(havePhotos);
// products.sort((x, y) => x.price - y.price);
// console.log(products);

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const week = {};
// for (let index = 0; index < en.length; index++) {
//     week[en[index]] = ru[index];
// }
// console.log(week);

// Лекция 9 
// const button = document.querySelector(".button");
// button.onclick= function() { 
//     if(button.parentElement.children[0].checked) {
//         alert("чай закончился")
        
//     } else if (button.parentElement.children[1].checked){ 
//         alert(" кофе закончился")
//     }

// }