const data = "NEGIE1";
const reversedData = data.slice(0, -1).split('').reverse().join('') + data.slice(-1);

console.log("soal no 1 :",reversedData);

const sentence = "Saya sangat senang mengerjakan soal algoritma"
const words = sentence.split(" ");
let maxLength = 0;
words.forEach(word => {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
});
const longestWords = words.filter(word => word.length === maxLength);
let resultWords;
if (longestWords.length > 1) {
    resultWords = longestWords.slice(0, 2);
} else {
    resultWords = longestWords;
}

console.log("Soal no 2 :Kata terpanjang:", resultWords);