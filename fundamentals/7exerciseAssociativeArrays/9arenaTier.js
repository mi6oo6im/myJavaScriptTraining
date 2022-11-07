function arenaTier(inputArr) {
    //variables:
    let deadPool = {};
    //functions:
    function battleFunc(deadPool, gladiator1, gladiator2) {
        if (deadPool[gladiator1] && deadPool[gladiator2]) {
            let gladiator1Techniques = Object.keys(deadPool[gladiator1]);
            let gladiator2Techniques = Object.keys(deadPool[gladiator2]);
            let thereWillBeBattle = false;
            gladiator1Techniques.forEach(technique => {
                if (gladiator2Techniques.includes(technique) && technique !== 'totalSkill') {
                    thereWillBeBattle = true;
                }
            });
            if (thereWillBeBattle) {
                if (deadPool[gladiator1].totalSkill > deadPool[gladiator2].totalSkill) {
                    delete deadPool[gladiator2];
                } else if (deadPool[gladiator2].totalSkill > deadPool[gladiator1].totalSkill) {
                    delete deadPool[gladiator1];
                }
            }
        }
        return deadPool;
    }

    function addGladiatorFunc(deadPool, name, technique, skill) {
        if (!deadPool[name]) {
            deadPool[name] = {
                totalSkill: 0,
            };
        }
        if (deadPool[name][technique] >= skill) {
            //pass
        } else {
            deadPool[name][technique] = skill;
            deadPool[name].totalSkill += skill;
        }
        return deadPool;
    }

    function returnDeadPool(deadPool) {
        let gladiatorsSorted = Object.entries(deadPool)
            .sort(function sortingMain(a, b) {
                if (a[1].totalSkill === b[1].totalSkill) {
                    return a[0].localeCompare(b[0]);
                } else {
                    return b[1].totalSkill - a[1].totalSkill;
                }
            });
        let res = ''
        gladiatorsSorted.forEach(([gladiator, techniques]) => {
            res += `${gladiator}: ${techniques.totalSkill} skill\n`;
            let techniquesSorted = Object.entries(techniques)
                .sort(function sortingTech(a, b) {
                    if (a[1] === b[1]) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1] - a[1];
                    }
                });
            techniquesSorted.forEach(([technique, skill]) => {
                if (technique !== 'totalSkill') {
                    res += `- ${technique} <!> ${skill}\n`;
                }
            });
        });
        return res.trim();
    }

    //Control flow:
    let currentRecord = inputArr.shift();
    while (currentRecord !== 'Ave Cesar') {
        if (currentRecord.includes(' vs ')) {
            let [gladiator1, gladiator2] = currentRecord.split(' vs ');
            deadPool = battleFunc(deadPool, gladiator1, gladiator2)
        } else {
            let [name, technique, skill] = currentRecord.split(' -> ');
            deadPool = addGladiatorFunc(deadPool, name, technique, Number(skill));
        }
        currentRecord = inputArr.shift();
    }
    console.log(returnDeadPool(deadPool));
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
);
console.log('-----------------------');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
);
console.log('-----------------------');