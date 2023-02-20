let x = 11;
let f = 0;
for(let i=1;i<=x;i++){
if(x%i==0){
f++
}
}
if(f==2){
console.log("prime")
}
else{
console.log("not prime")
}