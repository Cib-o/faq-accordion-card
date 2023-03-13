const questionElement = document.querySelectorAll("h4");

const toggleAnswer = (el) => {
  questionElement.forEach(element => {
    if (element.innerHTML === el.target.innerHTML) {
      if (el.target.style.fontWeight !== "700") {
        el.target.childNodes[1].style.rotate = "180deg"
        el.target.style.color = "rgb(29, 30, 53)";
        el.target.style.fontWeight = "700";
        element.nextSibling.nextElementSibling.style.display = "block";
      } else {
        el.target.childNodes[1].style.rotate = ""
        el.target.style.color = "";
        el.target.style.fontWeight = "";
        element.nextSibling.nextElementSibling.style.display = "";
      }
    }
  });
};

questionElement.forEach(el => {
  el.addEventListener("click", el => {
    toggleAnswer(el);
  });
});