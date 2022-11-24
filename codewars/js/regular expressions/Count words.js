function wordCount(s) {
  const bannedRE = /^(a|the|on|at|of|upon|in|as)$/i
  
  let words = s.match(/[a-z]+/ig) || [];
  
  return words
          .filter(item => !bannedRE.test(item))
          .length;
}