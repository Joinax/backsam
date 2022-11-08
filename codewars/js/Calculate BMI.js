function bmi(weight, height) {
    const x = weight / height ** 2;
    return x <= 18.5 ? 'Underweight' : x <= 25 ? 'Normal' : x <= 30 ? 'Overweight' : 'Obese';
}