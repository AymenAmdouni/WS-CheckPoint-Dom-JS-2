// console.log("JS file linked successfully");


// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Sélection des éléments HTML
const boxColor = document.getElementById("colorBox");
const buttonBox = document.getElementById("button-changer");

// Ajout de l'événement au bouton
buttonBox.addEventListener("click", function () {
  // Générer une nouvelle couleur
  const newColor = getRandomColor();

  // Appliquer la nouvelle couleur au colorBox
  boxColor.style.backgroundColor = newColor;

  // Appliquer la nouvelle couleur au bouton
  buttonBox.style.borderColor = newColor;
  buttonBox.style.backgroundColor = newColor;
  buttonBox.style.color = "white";


  buttonBox.onmouseout = null;
  buttonBox.onmousemove = null;

  // Gestion de l'effet hover
  buttonBox.onmouseout = () => {
    buttonBox.style.backgroundColor = "white";
    buttonBox.style.color = newColor;
  };

  buttonBox.onmousemove = () => {
    buttonBox.style.backgroundColor = newColor;
    buttonBox.style.borderColor = newColor;
    buttonBox.style.color = "white";
  };
});

