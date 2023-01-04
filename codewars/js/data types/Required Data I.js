function countSel(lst) {
  return [getTotal(lst), getDistinct(lst), getOneTimeOnly(lst), getMostCommon(lst)];
}

function getTotal(lst) {
  return lst.length;
}

function getDistinct(lst) {
  let unique  = [...new Set(lst)];
  return unique.length;
}

function getOneTimeOnly(lst) {
  let oneTimeOnly = lst.filter((item, _, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
  return oneTimeOnly.length;
}

function getMostCommon(lst) {
  let mostCommon = [];
  let currentMax = 0;
  lst.forEach((candidate, _, arr) => {
    let max = arr.filter(item => item === candidate).length;
    if (max === currentMax) {
      if (!mostCommon.includes(candidate)) mostCommon.push(candidate); 
    } else if (max > currentMax) {
      mostCommon = [];
      mostCommon.push(candidate);
      currentMax = max;
    } 
  })
  mostCommonSorted = mostCommon.sort((a, b) => a - b);
  return [mostCommonSorted, currentMax];
}