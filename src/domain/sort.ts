export enum PackageStackType {
  Standard = 'STANDARD',
  Special = 'SPECIAL',
  Rejected = 'REJECTED',
}

/**
* Returns stack to sort a given package into
*/
export default function sort(width: number, height: number, length: number, mass: number): PackageStackType {
  if (!isValidInput([width, height, length, mass])) {
      throw new Error('Invalid package input.');
  }

  // store results in constants to only calculate once
  const packageIsBulky = isBulky(width, height, length);
  const packageIsHeavy = isHeavy(mass);


  if (packageIsBulky && packageIsHeavy) {
      return PackageStackType.Rejected;
  } else if (packageIsBulky || packageIsHeavy) {
      return PackageStackType.Special;
  } else {
      return PackageStackType.Standard;
  }
}

/**
* Returns whether package input was valid (non-negative, finite number)
*/
function isValidInput(measurements: number[]): boolean {
  for (const measurement of measurements) {
      if (!Number.isFinite(measurement) || measurement <= 0) return false;
  }

  return true;
}

/**
* Returns whether package is bulky (dimensions >= 1m sqcm or any one dimension >= 150cm)
*/
function isBulky(width: number, height: number, length: number): boolean {
  return width * height * length >= 1000000 || width >= 150 || height >= 150 || length >= 150;
}

/**
* Returns whether package is heavy (mass >= 20kg)
*/
function isHeavy(mass: number): boolean {
  return mass >= 20;
}

