var subjreq = [1000000, 1200000, 1500000, 1800000, 2000000, 2500000, 3000000, 3600000, 4000000, 5000000, Infinity]
function setsubjcolors() {
  for (var i = 1; i <= game.subj; i++) {
    get('milestone' + i).attr("style", "background-color: #0A4;");
  }
}
function subj() {
  if (game.maxobj >= subjreq[game.subj]) {
    while (game.maxobj >= subjreq[game.subj]) {
      game.subj++;
    }
  }
  setsubjcolors()
}