/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(triangle = []) {
//   const tri = 3;
//   let countTriangles = 0;
//   const lovers = {};
//   const setTriangle = new Set(triangle);
//   const arr = Array.from(setTriangle);
//   const maxTriangles = Math.trunc(arr.length / tri);
//   const length = triangle.length;
// if(maxTriangles < 1){
//   return 0;
// }
//   for(let i = 0; i < length; i++){
// if(triangle[i] < length){
//   lovers[i] = triangle[i] -1;
// }
//   }
//   const values = Object.values(lovers);
//   const keys = Object.keys(lovers);
//   if(keys.length > 0){
//     for(let i = 0; i< keys.length; i++){
// if((i!= lovers[i]) && i == lovers[lovers[lovers[i]]] ) {
//   countTriangles++;
//   i+=2
// }

//     }

//   }
// return countTriangles;
const tri = 3;
let countTriangles = 0;
const loversTies = {};
const setTriangle = new Set(triangle);
const arr = Array.from(setTriangle);
const maxTriangles = Math.trunc(arr.length / tri);
const length = triangle.length;
if(maxTriangles < 1){
return 0;
}

for(let i=0; i< length; i++){
if(!loversTies[i + 1]){
  loversTies[i + 1] = triangle[i];
}
}
const keys = Object.keys(loversTies);
for(let i = 1; i <= keys.length; i++){
let sum = 0;

let first = loversTies[i];  //2
let second = loversTies[first];//3
let third = loversTies[second];//1
sum += (i - (+first)) +(+first - (+second)) + (+second - (+third));
if((+first !=i) && sum == 0){ 
  countTriangles++;
}
}

return countTriangles / 3;
};
