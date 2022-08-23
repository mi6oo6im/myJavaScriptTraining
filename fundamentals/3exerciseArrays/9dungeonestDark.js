function dungeonestDark(input) {
    let health = 100;
    let gold = 0;
    let roomsArr = input[0].split('|');
    let roomCounter = 0
    for (const room of roomsArr) {
        roomCounter++;
        let commandLine = room.split(' ')
        if (room.includes('potion')) {
            let healing = Number(commandLine[1]);
            if (health + healing > 100) {
                healing = 100 - health;
                health = 100;
            } else {
                health += healing;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room.includes('chest')) {
            let newGold = Number(commandLine[1]);
            gold += newGold;
            console.log(`You found ${newGold} coins.`);
        } else {
            let enemy = commandLine[0];
            let damage = Number(commandLine[1]);
            if (health <= damage) {
                console.log(`You died! Killed by ${enemy}.`);
                console.log(`Best room: ${roomCounter}`);
                health = 0;
                break;
            } else {
                health -= damage;
                console.log(`You slayed ${enemy}.`);
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!\nCoins: ${gold}\nHealth: ${health}`
        );
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-------------------------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
console.log('-------------------------');