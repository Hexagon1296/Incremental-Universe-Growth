let binds = {
  d: () => {
    if(game.isdimunlocked) buydim(false);
  },
  k: () => {
    if(game.isdmunlocked) buydm();
  },
  o: () => {
    if(game.isobjsunlocked) getobjs();
  },
  a: () => {
    if(game.subj>4) gainarmp();
  }
}
document.onkeydown = function(e){
  if (e.key === "Enter") {
    document.activeElement.click();
  }
  let key = e.key.toLowerCase();
  if(binds[key]&&game.hotkeys) binds[key]();
})
