export function calculate(sex, age, weight, creatinine, height) {
    let score = 0;
    if (sex === "male") score += 1;
    if (age > 40) score += 1;
    if (weight > 60) score += 1;
    if (creatinine > .7) score+= 1;
    if (height > 160) score += 1;

    // const conditionsToAdd = ["M", 40, 60, .7, 160];
    //
    // for (var i = 1; i < arguments.length; i++) {
    //   if (arguments[i] > conditionsToAdd[i]) {
    //     score += 1;
    //   }
    // }
    return score;
}

export function determineSeverity(score) {
  if (score <= 3) return "low";
  return "high";
}
