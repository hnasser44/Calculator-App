const Keys = document.querySelectorAll(".key");
const OldAnswer = document.querySelector(".old-answer");
const CurrentAnswer = document.querySelector(".current-answer");
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

//body too
const toggler = document.querySelector("header .tri-state-toggle");
const input = document.querySelector("input");
const screen = document.querySelector(".screen");
const keysContainer = document.querySelector(".keys");
const delKey = document.querySelector(".keys .del-key");
const resetKey = document.querySelector(".keys .reset-key");
const equalKey = document.querySelector(".keys .equal-key");
//keys also, loop over them

const AddTheme2 = () => {
  document.body.classList.add("theme-2");
  toggler.classList.add("theme-2");
  input.classList.add("theme-2");
  screen.classList.add("theme-2");
  keysContainer.classList.add("theme-2");
  delKey.classList.add("theme-2");
  resetKey.classList.add("theme-2");
  equalKey.classList.add("theme-2");
  Keys.forEach((key) => {
    key.classList.add("theme-2");
  });
};

const RemoveTheme2 = () => {
  document.body.classList.remove("theme-2");
  toggler.classList.remove("theme-2");
  input.classList.remove("theme-2");
  screen.classList.remove("theme-2");
  keysContainer.classList.remove("theme-2");
  delKey.classList.remove("theme-2");
  resetKey.classList.remove("theme-2");
  equalKey.classList.remove("theme-2");
  Keys.forEach((key) => {
    key.classList.remove("theme-2");
  });
};

const AddTheme3 = () => {
  document.body.classList.add("theme-3");
  toggler.classList.add("theme-3");
  input.classList.add("theme-3");
  screen.classList.add("theme-3");
  keysContainer.classList.add("theme-3");
  delKey.classList.add("theme-3");
  resetKey.classList.add("theme-3");
  equalKey.classList.add("theme-3");
  Keys.forEach((key) => {
    key.classList.add("theme-3");
  });
};

const RemoveTheme3 = () => {
  document.body.classList.remove("theme-3");
  toggler.classList.remove("theme-3");
  input.classList.remove("theme-3");
  screen.classList.remove("theme-3");
  keysContainer.classList.remove("theme-3");
  delKey.classList.remove("theme-3");
  resetKey.classList.remove("theme-3");
  equalKey.classList.remove("theme-3");
  Keys.forEach((key) => {
    key.classList.remove("theme-3");
  });
};

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index === 0) {
      RemoveTheme2();
      RemoveTheme3();
    }
    if (index === 1) {
      AddTheme2();
      RemoveTheme3();
    }
    if (index === 2) {
      RemoveTheme2();
      AddTheme3();
    }

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

Keys.forEach((key) => {
  key.addEventListener("click", () => pressKey(key));
});

function isNumber(key) {
  return key >= 0 && key <= 9;
}

function deleteKey() {
  CurrentAnswer.innerHTML = CurrentAnswer.innerHTML.slice(0, -1);
}

function clearScreen() {
  OldAnswer.innerHTML = "";
  CurrentAnswer.innerHTML = "";
}

function calculate() {
  try {
    let result = eval(OldAnswer.innerHTML + CurrentAnswer.innerHTML);
    OldAnswer.innerHTML = "";
    CurrentAnswer.innerHTML = result;
  } catch (e) {
    CurrentAnswer.innerHTML = "Error";
  }
}

function pressKey(key) {
  switch (key.innerHTML) {
    case "DEL":
      deleteKey();
      break;
    case "RESET":
      clearScreen();
      break;
    case "=":
      calculate();
      break;
    default:
      if (isNumber(key.innerHTML)) {
        CurrentAnswer.innerHTML += key.innerHTML;
      } else if (key.innerHTML === ".") {
        if (!CurrentAnswer.innerHTML.includes(".")) {
          CurrentAnswer.innerHTML += ".";
        }
      } else if (
        key.innerHTML === "+" ||
        key.innerHTML === "-" ||
        key.innerHTML === "x" ||
        key.innerHTML === "/"
      ) {
        if (
          CurrentAnswer.innerHTML.length > 0 &&
          isNumber(CurrentAnswer.innerHTML[CurrentAnswer.innerHTML.length - 1])
        ) {
          if (key.innerHTML === "x")
            OldAnswer.innerHTML += CurrentAnswer.innerHTML + "*";
          else OldAnswer.innerHTML += CurrentAnswer.innerHTML + key.innerHTML;
          CurrentAnswer.innerHTML = "";
        }
      }
  }
}
