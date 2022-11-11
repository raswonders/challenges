function differentiate(str) {
  return new Term(str).diff()
                      .toString()
}

function Term(str) {
  [_, a, _, x, n] = str.match(/(-?\d*)?((x)(?:\^(-?\d+))?)?/i) || [];
  
  if (x) {
    this.exp = n ? Number(n) : 1;
    this.coef = a ? (a === '-' ? -1 : Number(a)) : 1;
  } else {
    this.exp = 0;
    this.coef = Number(a);
  }
}

Term.prototype = {
  diff: function() {
    if (this.exp === 0) {
      this.coef = 0;
    } else {
      this.coef *= this.exp;
      this.exp--;
    }
    
    return this;
  },
  
  toString: function() {
    let varStr = `x^${this.exp}`
    let coefStr = `${this.coef}`;
    
    if (this.exp) {
      if (this.coef === 1) coefStr = '';
      if (this.coef === -1) coefStr = '-';
      if (this.exp === 1) varStr = 'x';
    } else {
      varStr = '';
    } 
    
    return coefStr + varStr;
  },
}