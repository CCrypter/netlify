let testbutton = document.getElementById("testbutton");
testbutton.addEventListener("click", (event) => {
  event.preventDefault()
  alert("Проверка кнопки пройдена успешно! =)");
});