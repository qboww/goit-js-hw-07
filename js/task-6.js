function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type=number]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  createBoxes(input.value);
});

destroy.addEventListener("click", () => {
  clearBoxes();
  input.value = "";
});

const createBoxes = (amount) => {
  clearBoxes();
  let size = 30;

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxes.appendChild(box);
      size += 10;
    }
  } else {
    alert("Provide value in range from 1 to 100");
  }
};

const clearBoxes = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
};
