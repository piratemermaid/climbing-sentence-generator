function generateTerm() {
  for (let type in terms) {
    document.getElementById(type).innerHTML =
      terms[type][getRandomInt(terms[type].length)];
    document.getElementById(type).style.visibility = "visible";
  }
  document.getElementById("the").style.visibility = "visible";
}

function getRandomInt(last) {
  return Math.floor(Math.random() * Math.floor(last));
}
