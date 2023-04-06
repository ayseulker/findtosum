let numbers = [11, 8, 43, 27, 3, 36, 14];

let sum = 0;
for (let number of numbers) {
    sum += number

}
let avarage = sum /= numbers.length

console.log("Dizinin ortalaması : " + avarage); // 1. solve


let minNumber = numbers.sort(function (a, b) { return (a - b) })

console.log("En küçük sayı : " + minNumber[0]); // 2. solve

console.log("En büyük sayı :  "+ minNumber[6]) // 3. solve


let odd= [];
for (let number of numbers) {
    if (number % 2 == 1) {
    odd.push(number)
    }
}
console.log("Tek sayılar : " + odd )

let ksıralama = numbers.sort(function (a, b) { return (a - b) })

console.log("Küçükten büyüğe sıralama : " + ksıralama )

let bsıralama = numbers.sort(function (a, b) { return (b - a) })

console.log("Büyükten küçüğe sıralama : " + bsıralama )