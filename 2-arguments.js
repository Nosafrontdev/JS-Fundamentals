import process from 'node:process';

const name = process.argv[2];

if (name.lenght ===0) {
    console.log("No argument");}
else if (name.lenght ===1) {
    console.log("Argument found")}
    else{
        console.log("Arguments found");}
    