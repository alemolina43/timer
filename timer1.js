const args = process.argv.slice(2);


const seconds = args.map(s => Number(s)).filter(s => !isNaN(s) && s >= 0);

if (seconds.length <= 0) {
  return;
}

for (const sec of seconds) {
  const delay = sec * 1000;
  setTimeout(() => {
    process.stdout.write(".\n");
  }, delay);
}

