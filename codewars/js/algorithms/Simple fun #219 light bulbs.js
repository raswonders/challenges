function lightBulbs(lights, turns) {
  lights = lights.map(item => Boolean(item));

  for (let i = 0; i < turns; i++) {
    lights = lights.map((item, j, arr) => {
      return (arr[(j + arr.length - 1) % arr.length])
        ? !item
        : item;
    })
  }

  return lights.map(item => Number(item));
}

console.log(lightBulbs([0,1,1,0,1,1], 2))