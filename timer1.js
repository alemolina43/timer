const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please set amount of time (in secs)', (seconds) => {
  const secsToArr = seconds.split(" ").map(s => Number(s)).filter(s => !isNaN(s) && s >= 0);
      
  if (secsToArr.length <= 0) {
    rl.close();
    return;
  }

  for (const sec of secsToArr) {
    const delay = sec * 1000;
    setTimeout(() => {
      process.stdout.write(".\n");
    }, delay);
  }

  rl.close();
});

