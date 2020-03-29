const SUN_MASS = 2e30; //kg
const SUN_RADIUS = 696340000; //meters

function calcBmi(height, weight) {
    return (10000 * weight / (height * height));
}

function calcClass(mass, size) {
    if (isHumanMassed(mass)){
        let bmi = calcBmi(size,mass);
        if (bmi<15.5) {
            return "Severely underweight";
        } else if (bmi<17.5) {
            return "Underweight";
        } else if (bmi<18.5) {
            return "Slightly underweight";
        } else if (bmi<25) {
            return "In a healthy range";
        } else if (bmi<30) {
            return "Overweight";
        } else if (bmi<35) {
            return "Moderately obese";
        } else if (bmi<40) {
            return "Serverely obese";
        } else {
            return "Seriously, seriously, obese";
        } //end human massed 
    } else if (mass<1 && mass > 0) {
        return "A teeny tiny glob of matter"
    } else if (mass == 0) {
        return "A photon";
    } else if (mass < 0) {
        return "Very cool, as you are exotic matter!";
    } else if (!isStellarMass(mass)) {
        return "A very big glob of matter!"
    } else if (mustBeBH(mass)){
        return `A black hole, and your size is really ${getBHLimit(mass)}`;
    } else { 
        return getStarType(size, mass);
    }
}

function isHumanMassed (mass) {
    return (mass<600 && mass>=1);
}
function isStellarMass(mass){
    return mass > 2e29;
}
function mustBeBH(mass){
    return mass>4e32;
}
function getBHLimit(mass) { //returns Swarzchild radius in cm
    2 * 100 * 6.67e-10 * mass / (3e8 * 3e8);
}
function getStarType(size, mass){
    const meters = size/100; 
    let density = 6 * mass / (size * size * size * Math.PI);
    if (density > 10e18 ) {
        return `A black hole, and your size is really ${getBHLimit(mass)}`;
    } else if (density > 10e16) {
        return `A neutron star, you degenerate fuck`;
    } else if (density > 10^8) {
        return "A white dwarf";
    } else if (density > 5000) {
        return "A dwarf star, but that is fine :)";
    } else if (density > 500) {
        return "A main sequence star, nice!";
    } else if (size > SUN_RADIUS*10 &&  density > 0.04){
        return "A blue supergiant";
    } else if (size > SUN_RADIUS*10) {
        return "A red giant";
    } else {
        return "weird";
    }
}
