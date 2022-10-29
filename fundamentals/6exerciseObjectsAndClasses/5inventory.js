function inventory(inputArr) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let heroesList = [];
    inputArr.forEach(lineItem => {
        let [name, level, items] = lineItem.split(' / ');
        let currentHero = new Hero(name, level, items);
        heroesList.unshift(currentHero);
    });
    heroesList.sort((a, b) => Number(a.level) - Number(b.level))
    heroesList.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
console.log('--------------------------------------');
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);
console.log('--------------------------------------');