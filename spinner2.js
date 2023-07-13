const animationData = ['|', '/', '-', '\\', '||', '//', '--', '\\\\', 'Done'];

function animate() {
  let delay = 100;

  for (const char of animationData) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
}

animate();
