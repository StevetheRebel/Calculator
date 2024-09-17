const yearEl = document.getElementById("year");
const btnsEl = document.querySelectorAll(".btn");

// set the year of the copyrights
function setYear() {
  const date = new Date();

  return (yearEl.innerText = date.getFullYear());
}

setYear();

btnsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    event.preventDefault();
  });
});

function add(input1, input2) {
  return input1 + input2;
}

function mult(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

function subtr(input1, input2) {
  return input1 - input2;
}

function perc(input) {
    return `${input/100 *100}%`
}

console.log(perc(69));
