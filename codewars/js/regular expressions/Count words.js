function wordCount(s) {
  const bannedRE = /^(a|the|on|at|of|upon|in|as)$/i
  return s.match(/[a-z]+/ig)
          .filter(item => !bannedRE.test(item))
          .length;
}