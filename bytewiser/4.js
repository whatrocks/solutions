my_bufs = []
process.stdin.on('data', (buff) => {
  my_bufs.push(buff);
  console.log(Buffer.concat(my_bufs));
});
