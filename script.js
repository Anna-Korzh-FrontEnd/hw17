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

  const listItem = addTodo(inputText);

  listInput.append(listItem);
  input.value = "";

  const button = document.createElement("Button");
  button.classList.add("btn-delete");
  button.innerText = "Delete";

  listItem.append(button);
}

list.addEventListener("click", (event) =>{
  if(event.target.className === 'btn-delete') deleteItem(event);
});

const addTodo = function(inputText) {
  const listItem = document.createElement("li");
  listItem.classList.add("item-value");


  listItem.innerText = inputText;
  const check = document.createElement("input");
  check.type = "checkbox";

  listItem.prepend(check);

  return listItem;
}

list.addEventListener("change", (event) =>{
  if(event.target.type === 'checkbox') setDisabled(event);
});

const setDisabled = function(event){
  event.target.disabled = true
  let li = event.target.closest('.item-value');
  li.classList.add('text-check');
  li.getElementsByClassName('btn-delete')[0].disabled = true;

}
const deleteItem = function(event){
  const item = event.target.closest(".item-value");
  item.remove();
}