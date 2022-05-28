// (a)=>{console.log(a)}

function dummy(params) {
    let a = 1234
    console.log(Math.floor(a / 1000) % 10);
    console.log(Math.floor(a / 100) % 10);
    console.log(Math.floor(a / 10) % 10);
    console.log(Math.floor(a) % 10);
}
dummy()