const randomNumber = () => {
  return (Math.random() * 100).toPrecision(2);

}
const isDivisible = (number) => (randomNumber() % number) === 0;
console.log(isDivisible(2))



module.exports = randomNumber

