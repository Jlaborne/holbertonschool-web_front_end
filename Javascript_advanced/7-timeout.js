console.log("Start of the execution queue");
setTimeout(function () {
  console.log("Final code block to be executed");
}, 0);

for (i = 0; i < 100; i++) {
  console.log(i + 1);
}

console.log("End of the loop printing");
