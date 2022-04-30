function fruitOrVegetable(input) {
    // Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
    // Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
    // Всички останали са "unknown"
    let prod = input[0];
    let res = '';
    switch (prod) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': res = 'fruit'; break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot': res = 'vegetable'; break;
        default: res = 'unknown'; break;
    }
    console.log(res);
}
fruitOrVegetable(["water"])