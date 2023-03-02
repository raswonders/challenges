function findMatchedByPattern([a, b, c]) {
    const regex = new RegExp(`^[^${b}${c}]*${a}[^${c}]*${b}.*${c}`);
    return str => regex.test(str);
}

console.log(findMatchedByPattern('acs')('access'));
// true

console.log(findMatchedByPattern('acs')('sacrifice'));
// false
