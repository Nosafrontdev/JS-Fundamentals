const arg = process.argv[2];
const num = Number(arg);

if (!isNaN(num)) {
    function num_1(times){
        for (let i = 0; i < times; i++) {
            console.log("C is fun");

        }
    }
    num_1(num);
} else {
    console.log("Missing number of occurrences");
}