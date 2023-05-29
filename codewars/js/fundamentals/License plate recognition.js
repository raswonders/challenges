const codeMatrix = {
  ' _  _||_ ' : 2,
  ' _  _||  ' : 2,
  ' _   ||_ ' : 2,
  ' _  _| _|' : 3,
  ' _   | _|' : 3,
  ' _  _|  |' : 3,
  '   |_|  |' : 4,
  '   | |  |' : 4,
  ' _ |_  _|' : 5,
  ' _ |_   |' : 5,
  ' _ |   _|' : 5,
  ' _ |_ |_|' : 6,
  ' _ |  |_|' : 6,
  ' _ |_ | |' : 6,
  ' _   |  |' : 7,
  ' _ |_||_|' : 8,
  ' _ |_|| |' : 8,
  ' _ | ||_|' : 8,
  ' _ |_| _|' : 9,
  ' _ | | _|' : 9,
  ' _ |_|  |' : 9,
};

function recognize(s) {
  const rows = s.split('\n')
                .map(row => row.match(/.{1,3}/g));
  let plate = '';
  
  for (let i = 0; i < rows[0].length; i++) {
    digitCode = rows[0][i] + rows[1][i] + rows[2][i];
    plate += codeMatrix[digitCode] || '?';
  }
  
  return plate;
}