function alphabetWar(fight) {
  const leftRE = /[wpbs]/g;
  const rightRE = /[mqdz]/g;
  
  let fightConverted = fight.replace(
    /((?<!t)[wpbs])?j([wpbs](?!t))?|((?<!j)[mqdz])?t([mqdz](?!j))?/g,
    units => convert(units))
    
  let [powerLeft, powerRight] = [countPower(leftRE), countPower( rightRE)];
  
  if (powerLeft === powerRight) return "Let's fight again!";
  if (powerLeft > powerRight) return "Left side wins!";
  if (powerLeft < powerRight) return "Right side wins!";
  
  function countPower(regex) {
    let soldiers = fightConverted.match(regex) || [];

    return soldiers.map(evalSol).reduce((acc, curr) => acc += Number(curr), 0)
  }
}
      
function convert(units) {    
  if (/j/.test(units)) return units.replace(/w/g, 'm') 
                                   .replace(/p/g, 'q')
                                   .replace(/b/g, 'd')
                                   .replace(/s/g, 'z');
      
  if (/t/.test(units)) return units.replace(/m/g, 'w') 
                                   .replace(/q/g, 'p')
                                   .replace(/d/g, 'b')
                                   .replace(/z/g, 's');
}

function evalSol(item) {
  return item.replace(/[wm]/, 4)
             .replace(/[pq]/, 3)
             .replace(/[bd]/, 2)
             .replace(/[sz]/, 1);
}