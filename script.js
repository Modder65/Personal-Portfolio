let isKeyboardUser = false;

const handleKeydown = (e) => {
  if (e.key === "Tab") {
    isKeyboardUser = true;
    document.body.classList.add("keyboard-user");
  }
};

const handleMousedown = () => {
  isKeyboardUser = false;
  document.body.classList.remove("keyboard-user");
};

document.addEventListener("keydown", handleKeydown);
document.addEventListener("mousedown", handleMousedown);
