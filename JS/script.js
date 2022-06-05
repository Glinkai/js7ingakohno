//1

//let food = [
// { name: " ORANGE", price: 500, isFruit: true },
//{ name: "burger", price: 100, isFruit: false },
//{ name: "watermelon", price: 210, isFruit: false },
//{ name: "toast", price: 350, isFruit: false },
//{ name: "apple ", price: 140, isFruit: true },
//{ name: " bAn ana", price: 380, isFruit: true }
//];

//forEach

//function showPrice(arr) {
//let food2 = [];
//arr.forEach(item => {
// if (item.price > 200)
// food2.push(item.name.toLowerCase().replace(" ", ""));

//});
// return food2;
//};
//result = showPrice(food);
//console.log(result);

//filter + map

//function showPrice(arr) {

//return arr.filter(item => item.price > 200)
//.map(item => item.name.toLowerCase().replace(" ", ""));
//}

//result = showPrice(food);
//console.log(result);

// reduce

//function showPrice(arr) {
// return arr.reduce((acc, item) => {
// if (item.price > 200) {
//acc.push(item.name.toLowerCase().replace(" ", ""));
//}
//return acc;
//}, [])
//}

//result = showPrice(food);
//console.log(result);

//+2

//let salary = [1000, 500, 1200, 230];

//function showSalary(arr) {
//newArr = arr.slice();
//newArr.sort((a, b) => a - b);
//newArr.reverse();
//console.log(`Это массив? ${Array.isArray(newArr)}`);

//return newArr;
//}

//result = showSalary(salary);
//console.log(result);

//+3

//let serials = ["How i met your mom", "Friends", "Big bang theory"];

//let str = serials.join(" ");

//console.log(str);

//+4

let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
];

//forEach

//function showPrice(arr) {
//sum = 0;
//arr.forEach(item =>
//sum += item.price);
//return sum;;

//};
//result = showPrice(food);
//console.log(result);


//reduce

function showPrice(arr) {
    sum = arr.reduce((acc, item) => {
        return acc + item.price;

    }, 0)
    return sum;
}

result = showPrice(food);
console.log(result);