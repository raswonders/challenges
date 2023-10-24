function swap(gene) {
  return gene === "1" ? "0" : "1";
}

function mutate(chromosome, p) {
  let mutated = chromosome.split("").map(gene => {
    return (Math.random() + p >= 1) ? swap(gene) : gene;
  })

  return mutated.join("");
}