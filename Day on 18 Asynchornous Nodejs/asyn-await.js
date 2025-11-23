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

async function runSteps() {
  try {
    const res1 = await step1();
    console.log(res1);

    const res2 = await step2();
    console.log(res2);

    const res3 = await step3();
    console.log(res3);
  } catch (err) {
    console.error(err);
  }
}

runSteps();
