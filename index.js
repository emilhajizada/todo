const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

let memory;

btn.onclick = () => {
  let text = inp.value;
  //Eger bosdursa
  if (text === "") {
    btn.innerText = "add";
    return;
  }
  if (btn.innerText === "add") {
    //Eger add dirse
    addTodoElment(text);
  } else {
    //Eger editdirse
    btn.innerText = "add";
    memory.innerText = text;
    inp.value = "";
  }
};
function addTodoElment(text) {
  //Elementlerin yaranmasi
  const li = document.createElement("li");
  const span = document.createElement("span");
  const edit = document.createElement("button");
  const del = document.createElement("button");
  //Elementlerin daxilinin yazilmasi
  li.style.border="2px solid blue  "
  span.style.border="1px solid red  "
  span.innerText = text;
  edit.innerText = "edit";
  del.innerText = "x";
  //Delete  hadisesi
  del.onclick = () => {
    li.remove();
  };
  //Edit  hadisesi
  edit.onclick = () => {
    memory = span;
    btn.innerText = "edit";
    inp.value = span.innerText;
  };
  //Elementlerin daxil edilmesi
  li.append(span, edit, del);
  list.appendChild(li); 
}
