let i1, i2;

const inp1 = document.getElementById("inp-1");
const inp2 = document.getElementById("inp-2");

inp1.addEventListener("input", (event) => {
  i1 = parseInt(inp1.value, 10);
});

inp2.addEventListener("input", (event) => {
  i2 = parseInt(inp2.value, 10);
});

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const setResult = (result) => {
  document.querySelector('input[name="output"]').value = result;
};

document.querySelector("#add").onclick = () => {
  const result = add(i1, i2);
  if (isNaN(result)) console.log("Error: Please Enter a number");
  else setResult(result);
};

document.querySelector("#sub").onclick = () => {
  const result = sub(i1, i2);
  if (isNaN(result)) console.log("Error: Please Enter a number");
  else setResult(result);
};

document.querySelector("#mul").onclick = () => {
  const result = mul(i1, i2);
  if (isNaN(result)) console.log("Error: Please Enter a number");
  else setResult(result);
};

document.querySelector("#divi").onclick = () => {
  const result = div(i1, i2);
  if (isNaN(result)) console.log("Error: Please Enter a number");
  else if (result === Infinity) console.log("Undefined Operation");
  else setResult(result);
};
