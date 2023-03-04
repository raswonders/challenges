function fifo(n, buffer) {
	// INPUT n: number, buffer: array
  // while buffer is not empty take a pageId from it
  // if page with pageId is in memory
    // then continue
    // else if memory is full 
      // then shift the array removing oldest page
      // add page at the end of memory
  // OUTPUT

  const memory = [];
  while (buffer.length > 0) {
    let page = buffer.shift();
    if (memory.includes(page)) continue;
    else {
      if (memory.length === n) memory.shift();
      memory.push(page)
    }
  }

  while (memory.length !== n) {
    memory.push(-1);
  }

  return memory;
}

console.log(fifo(3,  [1, 2, 3, 4, 2, 5]));