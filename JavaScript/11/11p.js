// const array = ['hello', 'world', 'search', 'good', 'search'];
// let searchIndex = -1;
// for(let i = 0; i < array.length; i++){
//   if(array[i] === 'search'){
//     searchIndex = i;
//     break;
//   }
// }

// console.log(searchIndex);

const array = ['hello', 'world', 'search', 'good', 'search'];
let searchIndex = -1;
for(let i = 0; i < array.length; i++){
  if(array[i] === 'search'){
    searchIndex = i;
    break;
  }
}

console.log(searchIndex);