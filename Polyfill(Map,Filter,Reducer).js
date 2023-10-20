//! MAP --------------------->

// 1. Normal way - 

const arr_1 = [1,2,3,4,5];
const myArr_1 = arr_1.map((num)=>{
  return num*10;
})

console.log(myArr_1);

//-----------------------------------------------//

// 2. Polyfill - 

Array.prototype.myArr_1 = function(cb) {
  let temp = [];
  for(let i = 0; i<this.length ; i++){
    temp.push(cb(this[i] , i , this));
  }
  return temp;
}

const myArray_1 = arr_1.myArr_1((num)=>{
  return num*20;
})

console.log(myArray_1);

//---------------------------------------------------------------------------------------------//
//! FILTER --------------------->

// 1. Normal way - 

const arr_2 = [10,20,30,40,50];
const myArr_2 = arr_2.filter((num)=>{
      if(num > 20)
      return num;
})
console.log(myArr_2);

//-----------------------------------------------//

// 2. Polyfill - 

Array.prototype.myArr_2 = function(cb){
  let temp = [];
  for(let i = 0; i<this.length ; i++){
    if(cb(this[i] , i , this))
    temp.push(this[i]);
  }
  return temp;
}

const myArray_2 = arr_2.myArr_2((num)=>{
  return num > 10
})
console.log(myArray_2);

//---------------------------------------------------------------------------------------------//
//! REDUCER --------------------->

// 1. Normal way - 

const arr_3 = [1,2,3,4,5,6,7,8,9,10];

const myArr_3 = arr_3.reduce ((acc , curr)=>{
  return acc+curr;
})
console.log(myArr_3);

//-----------------------------------------------//

// 2. Polyfill - 

Array.prototype.myArr_3 = function (cb , initialValue){
  var acc = initialValue;
  for(let i = 0; i<this.length ; i++){
    acc = acc ? cb(acc ,this[i] , i , this ) : this[i];
  }
  return acc;
}

const myArray_3 = arr_3.myArr_3((acc ,curr)=>{
    return acc+curr;
},100)
console.log(myArray_3);

//---------------------------------------------------------------------------------------------//


 