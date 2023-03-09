function decipherThis(str) {
  return str.split(' ')
    .map(word => {
      const initial = word.match(/^\d+/)[0];
      const rest = word.replace(/^\d+/, '');
      return `${String.fromCharCode(initial)}${swap(rest)}`;
    })
    .join(' ');
};

function swap(str) {
  return str.length >= 2
    ? str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
    : str;
};


console.log(decipherThis('72olle 103doo 100ya')); 
// 'Hello good day'

console.log(decipherThis('82yade 115te 103o'));
// 'Ready set go'