const ACTIVE_SUBMIT_BTN_CLASSNAME = "submit--active";
const ACTIVE_CLEAR_BTN_CLASSNAME = "reset--active";

const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;

// span с калориями
const normalCal = document.querySelector(".normal_cal");

const toggleOnBtn = (btn, activeClassName) => {
  btn.classList.add(activeClassName);
  btn.disabled = false;
};

const toggleOffBtn = (btn, activeClassName) => {
  btn.disabled = true;
  btn.classList.remove(activeClassName);
};

const isInputsValid = (inputs) => Array.from(inputs).every((i) => i.value);

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (isInputsValid(inputs)) {
      toggleOnBtn(submitButton, ACTIVE_SUBMIT_BTN_CLASSNAME);
    } else {
      toggleOffBtn(submitButton, ACTIVE_SUBMIT_BTN_CLASSNAME);
    }
  });
});

submitButton.addEventListener("click", (event) => {
  alert("Submit!");

  // эту строчку можно будет убрать, она для теста
  // пример того как можно получить значения в форме. У нас два инпута с именем gender
  // поэтому внутри массива gender мы проверяем поле checked. Нажмите "Рассчитать" и проверьте
  console.log(caloriesForm.gender[0].checked);

  // тоже можно будет удалить, пример как менять верстку из JS
  // нажмите "Рассчитать" и проверьте
  normalCal.textContent = "999999999999";

  // нужно чтобы страница после нажатия не обновлялась
  event.preventDefault();
});
