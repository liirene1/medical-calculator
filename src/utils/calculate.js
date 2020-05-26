export function calculate(inputs) {
    let score = 0;

    const conditionsToAdd = {
      "sex": "male",
      "age": 40,
      "weight": 60,
      "creatinine": .7,
      "height": 160
    };

    Object.keys(inputs).forEach(key => {
      if ((key === "sex" && inputs[key] === conditionsToAdd[key]) ||
        (key !== "sex" && inputs[key] > conditionsToAdd[key])) {
        score += 1;
      }
    });
    return score;
}

export function determineSeverity(score) {
  if (score <= 3) return "low";
  return "high";
}
