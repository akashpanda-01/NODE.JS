process.stdin.setEncoding('utf8')

process.stdin.on("data", (a) => {
    console.log(a);
});

process.stdin.on("end", () => {
    console.log("Input finished");
});

process.stdin.on('error', (err) => {
  console.error('An error occurred:', err);
});