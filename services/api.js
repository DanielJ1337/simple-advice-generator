const apiURL = "https://api.adviceslip.com/advice";
const button = document.getElementById("submit");
const pContent = document.getElementById("advice-content");
const adviceNumber = document.getElementById("number");

const fetchAdvice = async () => {
  const advice = await fetch(apiURL);
  const jsonData = await advice.json();
  pContent.innerHTML = '"' + jsonData.slip.advice + '"';
  adviceNumber.innerHTML = "ADVICE #" + jsonData.slip.id;
};

button.addEventListener("click", fetchAdvice);
