const cel=(celsius)=>{
    return `${(celsius * 9/5) + 32}° Fahrenheit` ;
}
const [, , num]=process.argv;
console.log(cel(num));