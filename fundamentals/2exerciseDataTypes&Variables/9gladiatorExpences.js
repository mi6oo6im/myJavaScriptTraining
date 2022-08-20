function gladiatorExpences(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let brockenHelms = Math.floor(lostFights / 2)
    let brockenSwords = Math.floor(lostFights / 3)
    let brockenShields = Math.floor(lostFights / 6)
    let brockenArmors = Math.floor(lostFights / 12)
    let totalCost = brockenHelms * helmPrice + 
                    brockenSwords * swordPrice + 
                    brockenShields * shieldPrice + 
                    brockenArmors * armorPrice
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
gladiatorExpences(7, 2, 3, 4, 5);
gladiatorExpences(23, 12.50, 21.50, 40, 200);