let binds = {
  d: () => {
    if(game.isdimunlocked) buydim(false);
  },
  m: () => {
    if(game.ishelp1bought) maxall(false);
    if(game.isdmhelp1bought) maxalldm(false);
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
}
