
// Converting callback functions into Promises
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}

// Using then
step1()
  .then((res1) => {
    console.log(res1);
    return step2();
  })
  .then((res2) => {
    console.log(res2);
    return step3();
  })
  .then((res3) => {
    console.log(res3);
  })
  .catch((err) => console.error(err));
