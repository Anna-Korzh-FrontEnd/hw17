const input = document.getElementById("text")
const listInput = document.getElementById("list")
const btn = document.getElementById("submit")
const errorMessage = document.querySelector(".error_message");


input.onfocus = () => {
  const isErrorField = input.classList.contains("error");

  if (isErrorField) {
    input.classList.remove("error");
    errorMessage.innerHTML = "";
  }
};

form.onsubmit = function() {
  event.preventDefault();
  if(input.value.trim().length === 0){
    input.classList.add("error");
    errorMessage.innerHTML = "Пожалуйста, введите значение!";
    return
  }

  const inputText = input.value;

  const inputItem = addTodo(inputText);

  listInput.append(inputItem);
  input.value = "";

  const button = document.createElement("Button");
  button.classList.add("btnDelete");
  button.innerText = "Delete";
  inputItem.addEventListener("click", (event) =>{
    removeButton(event);
  });
  inputItem.append(button);
}


const addTodo = function(inputText) {
  const inputItem = document.createElement("li");
  inputItem.classList.add("itemLi");


  inputItem.innerText = inputText;
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("change", (event) =>{
    setDisabled(event);
  });

  inputItem.prepend(check);

  return inputItem;
}

const setDisabled = function(event){
  event.target.disabled = true
  let li = event.target.closest('.itemLi');
  li.classList.add('text-check');
  li.getElementsByClassName('btnDelete')[0].disabled = true;

}
const removeButton = function(event){
  const item = event.target.closest(".itemLi");
  item.remove();
}