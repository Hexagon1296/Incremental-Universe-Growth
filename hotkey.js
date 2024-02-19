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
document.addEventListener("keydown", function(e){
  let key = e.key.toLowerCase();
  if(binds[key]&&game.hotkeys) binds[key]();
})
