//let array = ['Mango', 'Poly', 'Ajax'];

//let logItems = function(){
 //   for(let i = 0; i < array.length; i++){

  //      console.log(`${i + 1} - ${array[i]}`);
  //  }
   
//}
//const fruits = ['Mango', 'Poly', 'Ajax'];
//logItems(fruits);



//let calculateEngravingPrice = function(message, pricePerWord){
  //let words = message.split(' ');

  // const wordCount = words.length;

  // const totalPrice = wordCount * pricePerWord;

  // return totalPrice;
//}

//const message = "price"

//const pricePerWord = 10

//const price = calculateEngravingPrice(message, pricePerWord);

//console.log(`Цена Гравировки: ${price} грн`);                            



//const findLongestWord = function(string){
//let words = string.split(' ')
//let longestWord = ' '

 // for(const word of words){
  //  if(word.length > longestWord.length){
  //    longestWord = word
 //   }
 // }
 // return longestWord;
//}
//const text = "раз два три четыре пять вышел зайчик погулять"
//const longest = findLongestWord(text);
//console.log(`самое длинное слово: ${longest}`);




//const formatString = function(string){
 // if(string.length <= 40){
 //   return string;
 // }else{
 //   const shortString = string.slice(0, 40) + '...';
  //  return shortString;
 // }
//}

//const longText = "Это очень долгая строчка которая превышает длинну в сорок символов"
//const shortText = "это короткая строчка"

//console.log(formatString(longText));
//console.log(formatString(shortText));




//let checkForSpam = function(message){
 // if(message.includes('спам') || message.includes("продажа")){
  //  return true;
 // }
 //else{
 // return false;
 //}
  
  
//}

//let text1 = "тут нет спама и продажь"
//let text2 = "купи наши товары по выгодной цене"

//console.log(checkForSpam(text1));
//console.log(checkForSpam(text2));



let input;
const numbers = []
let total = 0;

while(true){
  input = prompt("введите число")
  console.log(typeof input);
  

  if(input === null){
    break;
  } 
  numbers.push(+input);
  

}


for(let i = 0; i < numbers.length; i++){
  
  console.log(`Загальна сума чисел дорівнює ${total}`)
  total += numbers[i];

}
console.log(total);





