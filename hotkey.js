let binds = {
  d: () => {
    buydim(false);
  },
  k: () => {
    buydm();
  },
  o: () => {
    getobjs();
  },
  a: () => {
    gainarmp();
  }
}
document.addEventListener("keydown", function(e){
  let key = e.key.toLowerCase();
  if(binds[e]&&game.hotkeys) binds[e]();
})
