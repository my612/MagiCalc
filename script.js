setColor = (color, id) => {
  console.log(color);
  document.querySelector(`#${id}`).style.backgroundColor = color;
};

let currentResult = "";

const buttons = document.querySelectorAll("button");

const resultField = document.querySelector('input[name="output"]');

const clear = () => {
  resultField.value = "";
};

const setResult = (result) => {
  resultField.value = result;
};
const par = () => {
  const exp = resultField.value;
  const result = -1 * eval(exp);
  setResult(result);
};
const equal = () => {
  const exp = resultField.value;
  const result = eval(exp);
  setResult(result);
};
const buttonMapping = {
  clear: clear,
  "bracket-left": "(",
  "bracket-right": ")",
  div: "/",
  times: "*",
  sub: "-",
  add: "+",
  equal: equal,
  par: par,
};
for (let i = 0; i < 10; i++) {
  buttonMapping[`N-${i}`] = i;
}

const handleButton = (button) => {
  const resultValue = resultField.value;
  const buttonValue = buttonMapping[`${button.id}`];
  if (typeof buttonValue === "function") buttonValue();
  else setResult(`${resultValue} ${buttonValue}`);
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => handleButton(button));
});
