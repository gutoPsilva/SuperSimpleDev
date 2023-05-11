const array = ['hello', 'world', 'search', 'good'];
let searchIndex = -1;
for(let i = 0; i < array.length; i++){
  if(array[i] === 'search'){
    searchIndex = i;
  }
}

console.log(searchIndex);