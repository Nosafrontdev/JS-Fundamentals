const Numb = process.argv[2];
const numb = Number(Numb);

if (!isNaN (numb)){
    console.log(Math.trunc(numb));
} else {
    console.log("Not a number");
}