const process = require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('exit', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
