"use strict";

//1:
  const input = document.getElementById("text")
  const listInput = document.getElementById("list")
  const btn = document.getElementById("submit")
  const errorMessage = document.querySelector(".error_message");

  btn.onclick = function() {
    event.preventDefault();

  const inputText = input.value;
  const inputItem = document.createElement("li");
  inputItem.classList.add("itemLi");
  
  if(input.value.trim().length === 0){
    input.classList.add("error");
    errorMessage.innerHTML = "Пожалуйста, введите значение!";
    return
  }
  input.onfocus = () => {
      const isErrorField = input.classList.contains("error");
    
      if (isErrorField) {
        input.classList.remove("error");
        errorMessage.innerHTML = "";
      }
    };

  inputItem.innerText = inputText;
  listInput.append(inputItem);
  input.value = "";
  
  const button = document.createElement("Button");
  button.classList.add("btn-Delete");
  button.innerText = "Delete";
  inputItem.append(button);

  inputItem.addEventListener("click", (event) =>{
    const isRemoveButton = event.target.className === "btn-Delete";
          
          if(isRemoveButton){
              const item = event.target.closest(".itemLi");
              item.remove();
          }
  });
}

 

