const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  showBoxes();

  function showBoxes() {
    const triggerBox = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      console.log(boxTop, triggerBox);
      if (boxTop < triggerBox) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
