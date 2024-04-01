function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



// sleep(5000);

console.log("sleep 2000ms");

let a = "a12"

console.log(Number(a) === false);

if(!NaN){
    console.log('yes');
}