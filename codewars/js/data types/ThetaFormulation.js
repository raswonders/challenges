const thetaFormula = (radius, arc, angle) => {
  if ([radius, arc, angle].every(arg => typeof arg === 'number')) return radius === (arc / angle);
  if ([radius, arc, angle].includes(undefined)) return null; 
  if ([radius, arc, angle].join('').split('?').length > 2) return null;
  if (radius === '?') return +(arc / angle).toFixed(3);
  if (arc === '?') return +(radius * angle).toFixed(3);
  if (angle === '?') return +(arc / radius).toFixed(3);
  return null;
}