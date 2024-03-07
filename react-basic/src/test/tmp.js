function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



sleep(5000);

console.log("sleep 2000ms");