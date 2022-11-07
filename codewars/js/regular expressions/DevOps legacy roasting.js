function roastLegacy(workloads) {
  legacyPoints = {
    COBOL: 1000,
    nonobject: 500,
    monolithic: 500,
    fax: 100,
    modem: 100,
    thickclient: 50,
    tape: 50,
    floppy: 50,
    oldschoolIT: 50,
  }
  
  complaints = [
    "slow!",
    "expensive!",
    "manual!",
    "down!",
    "hostage!",
    "security!",
  ]
  
  let legacyPointsCount = 0;
  for (legacy in legacyPoints) {
    let legacyRE = new RegExp(`${legacy}`, "gi");
    matches = workloads.match(legacyRE);
    legacyPointsCount += matches ? legacyPoints[legacy] * matches.length : 0;
  }
  
  let complaintsCount = 0;
  for (complaint of complaints) {
    let legacyRE = new RegExp(`${complaint}`, "gi");
    matches = workloads.match(legacyRE);
    complaintsCount += matches ? matches.length : 0;
  }
  
  if (legacyPointsCount == 0 && complaintsCount == 0) {
    return 'These guys are already DevOps and in the Cloud and the business is happy!';
  } else 
    return `Burn baby burn disco inferno ${legacyPointsCount} points earned in this roasting and ${complaintsCount} complaints resolved!`;
  }