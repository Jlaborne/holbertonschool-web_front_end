function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Create the themes
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  spookyButton.onclick = spooky;

  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark mode";
  darkModeButton.onclick = darkMode;

  const screamModeButton = document.createElement("button");
  screamModeButton.textContent = "Scream mode";
  screamModeButton.onclick = screamMode;

  document.body.appendChild(spookyButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
}

main();
