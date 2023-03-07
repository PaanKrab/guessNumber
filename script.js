let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function() {
  //pobieramy wartość z inputa
  const guess = Number(document.querySelector("input").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Wpisz liczbe!"
  }
  else if (guess === hiddenNumber) {
    
      document.querySelector(".message").textContent = "Poprawna Liczba!";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".qmark").style.width = "180px";
      document.querySelector("img").src = "https://raw.githubusercontent.com/PaanKrab/guessNumber/main/IMG_20230129_152524.jpg"
  }
  else if (guess > hiddenNumber) {
    if (score > 1) {
    document.querySelector(".message").textContent = "Zbyt duza liczba!";
    score--;
    document.querySelector(".points").textContent = score;
    }
    //0 punktów
    else {
      document.querySelector(".message").textContent = "Przegrales!";
      document.querySelector(".points").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //jeśli liczba jest mniejsza
  else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Zbyt mala liczba!";
      score--;
      document.querySelector(".points").textContent = score;
    }
    //0 punktów
    else {
      document.querySelector(".message").textContent = "Przegraleś!";
      document.querySelector(".points").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
})
//przycisk jeszcze raz
 
  document.querySelector(".again").addEventListener("click", function() {
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Zacznij zgadywanie...";
  document.querySelector("input").value = null;
  score = 20;
  document.querySelector(".points").textContent = score;
  document.querySelector("img").src = "https://raw.githubusercontent.com/PaanKrab/guessNumber/main/IMG_20230129_152520.jpg";
  document.querySelector("body").style.backgroundColor = "powderblue";
})



