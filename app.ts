//Grade practice
let score: number = 101;

if (score < 0 || score > 100) {
  console.log("The score is not allowed");
} else if (score >= 90) {
  console.log('Your rank is "A"');
} else if (score >= 80) {
  console.log('Your rank is "B"');
} else if (score >= 70) {
  console.log('Your rank is "C"');
} else if (score >= 60) {
  console.log('Your rank is "D"');
} else if (score >= 50) {
  console.log('Your rank is "E"');
} else if (score < 50) {
  console.log('Your rank is "F"');
}

//Traffic light practice
let light: string = "YELLOW";

switch (light) {
  case "RED": {
    console.log('the next color is "Yellow"');
    break;
  }
  case "YELLOW": {
    console.log('the next color is "Green"');
    break;
  }
  case "GREEN": {
    console.log('the next color is "Red"');
    break;
  }
}
