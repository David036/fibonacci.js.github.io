let k = 0 
console.log(k);
let j = 1
console.log(j);
for ( let i = 1; i < 40 ;i=j+k){
    console.log(i); 
    j = k + j
    k = j - k    
}