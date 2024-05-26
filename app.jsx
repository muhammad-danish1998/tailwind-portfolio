let title = document.querySelector(".titleMain");
let names = "I am Muhammad Danish Tanoli";
let index = 4;

const typeWriter = () => {
  let new_title = names.slice(0, index);
  title.innerText = new_title;
  index > names.length ? (index = 1) : index++;
  setTimeout(() => typeWriter(), 100);
};

typeWriter();
