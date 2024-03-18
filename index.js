const textArray = [
  "Front-end Developer",
  "UI & UX Designer",
  "Graphic Designer",
];
let textIndex = 0;
let charIndex = 0;
const speed = 100; // Speed of typing in milliseconds

function type() {
  if (charIndex < textArray[textIndex].length) {
    document.getElementById("typewriter-text").textContent +=
      textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, speed + 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typewriter-text").textContent = textArray[
      textIndex
    ].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed - 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, speed);
  }
}

setTimeout(type, speed);
