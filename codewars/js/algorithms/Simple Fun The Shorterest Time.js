function shorterestTime(n,m,speeds) {
  console.log(n, m)
  let doorOpens = speeds[1];
  let doorCloses = speeds[2];
  let byFoot = n * speeds[3];
  let byLift = Math.abs(n - m) * speeds[0] + n * speeds[0] + 2 * doorOpens + doorCloses;
  let res = Math.min(byFoot, byLift);
  console.log(res);
  return res;
}