const arg = process.argv[2];
const arg_1 = process.argv[3];

const a = Number(arg);
const b = Number(arg_1);

function add(a, b){
    console.log(a + b);
}

add(a,b);