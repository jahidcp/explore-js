function woodCalculator(chairQuantity, tableQuantity, badQuantity){
    const perChairWood = 5;
    const perTableWood = 13;
    const perBadWood = 51;

    const chaiWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const badWood = perBadWood * badQuantity;

    const totalWood = chaiWood + tableWood + badWood;

    return totalWood;
}

let totalWood = woodCalculator(0, 0, 1);
console.log(totalWood);