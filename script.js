let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function() {
  //pobieramy wartość z inputa
  const guess = Number(document.querySelector("input").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Wpisz liczbę!"
  }
  else if (guess === hiddenNumber) {
    
      document.querySelector(".message").textContent = "Poprawna Liczba!";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".qmark").style.width = "180px";
      document.querySelector("img").src = "IMG_20230129_152524.jpg"
  }
  else if (guess > hiddenNumber) {
    if (score > 1) {
    document.querySelector(".message").textContent = "Zbyt duża liczba!";
    score--;
    document.querySelector(".points").textContent = score;
    }
    //0 punktów
    else {
      document.querySelector(".message").textContent = "Przegrałeś!";
      document.querySelector(".points").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //jeśli liczba jest mniejsza
  else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Zbyt mała liczba!";
      score--;
      document.querySelector(".points").textContent = score;
    }
    //0 punktów
    else {
      document.querySelector(".message").textContent = "Przegrałeś!";
      document.querySelector(".points").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
})
//przycisk jeszcze raz
 
  document.querySelector(".again").addEventListener("click", function() {
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".qmark").textContent = hiddenNumber;
  document.querySelector(".message").textContent = "Zacznij zgadywanie...";
  document.querySelector("input").value = null;
  score = 20;
  document.querySelector(".points").textContent = score;
  document.querySelector("img").src = "IMG_20230129_152520.jpg"
})



