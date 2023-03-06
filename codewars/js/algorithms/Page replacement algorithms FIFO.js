unction fifo(n, buffer) { 
  let oldestPage = 0;
  let memory = buffer.reduce((mem, page) => {
    if (!mem.includes(page)) {
      mem[oldestPage] = page;
      oldestPage++;
      oldestPage %= n;
    }
    return mem;
  }, [])

  while (memory.length !== n) {
    memory.push(-1);
  }

  return memory;
}

console.log(fifo(3,  [1, 2, 3, 4, 2, 5]));