let x = 11;
let count = 0;
for(let i=1;i<=x;i++){
if(x%i==0){
count++
}
}
if(count==2){
console.log("prime")
}else{
console.log("not prime")
}