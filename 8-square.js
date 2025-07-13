const arg = process.argv[2];
const size = Number(arg);

if (!isNaN(size)) {
    function printSquare(times) {
        for (let i = 0; i < times; i++) {
            console.log('X'.repeat(times));
        }
    }
    printSquare(size);
} else {
    console.log("Missing size");
}