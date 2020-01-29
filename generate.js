function generateTerm() {
  $("#sentence").fadeOut(function() {
    for (let type in terms) {
      document.getElementById(type).innerHTML =
        terms[type][getRandomInt(terms[type].length)];
    }
    $("#sentence").fadeIn();
  });
}

function getRandomInt(last) {
  return Math.floor(Math.random() * Math.floor(last));
}
