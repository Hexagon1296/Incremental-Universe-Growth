var reader = new FileReader();
function reset() {
  game = {
    clicks: -Infinity,
    cbb: -Infinity,
    basecs: 0,
    mult: 0,
    cs: 0,
    csab: 0,
    upg1cost: 1,
    upg1bought: 1,
    upg2cost: 2,
    upg2base: 1.5,
    upg2bought: 0,
    upg3cost: 2,
    upg3bought: 0,
    upg4cost: 4,
    upg4bought: 0,
    upg5cost: 50,
    upg5bought: 0,
    antiupg1cost: 27,
    antiupg1bought: 0,
    antiupg2cost: 76,
    antiupg2bought: 0,
    dims: 1,
    dimcost: 12,
    isdimunlocked: false,
    antieffect: 1,
    isupg1bought: false,
    isupg2bought: false,
    isupg3bought: false,
    isupg4bought: false,
    isupg5bought: false,
    isupg6bought: false,
    dm: -Infinity,
    dmgain: 0,
    dmboost: 1,
    isdmunlocked: false,
    dmmult: 0,
    dmbuy1cost: log(5),
    dmbuy1bought: 0,
    dmbuy2cost: log(40),
    dmbuy2bought: 0,
    dmbuy3cost: 6,
    dmbuy3bought: 0,
    dmcap: 1,
    isdmupg1bought: false,
    isdmupg2bought: false,
    isdmupg3bought: false,
    ischalunlocked: false,
    chal: [false, false],
    chalfin: {
      total: 0,
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0,
      c5: 0,
      c6: 0,
      c7: 0
    },
    chalboost: 1,
    chalextend: false,
    objs: -Infinity,
    objboost: 1,
    isobjsunlocked: false,
    objbuy1cost: log(2),
    objbuy1bought: 0,
    subj: 0,
    maxobjm: -Infinity,
    armp: -Infinity,
    amrp: -Infinity,
    amrpboost: 1,
    oc: false,
    occomp: {
      oc1: 0,
      oc2: 0
    },
    occonf: true,
    ocexitconf: false,
    ocobjreset: false,
    theme: 0,
    musicidx: 0,
    musicvol: 0.5,
    musictrack: 0,
    sfx: 0.5,
    place: 3,
    start: {
      before: 9,
      after: 6
    },
    notate: {
      XeYeZ: true,
      XeY: true
    },
    startplaying: Date.now(),
    versionstarted: 0,
    totalclicks: -Infinity,
    maxclicks: -Infinity,
    totalbought: {
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    },
    lastbought: {
      1: 1652572800000,
      2: 1652572800000,
      3: 1652572800000,
      4: 1652572800000,
      5: 1652572800000
    },
    totaldim: 1,
    passivedim: 0,
    maxdim: 0,
    lastdim: 1652572800000, // May 15 2022
    totalantibought: {
      1: 0,
      2: 0,
    },
    lastantibought: {
      1: 1652572800000,
      2: 1652572800000
    },
    autobought: {
      1: 1652572800000,
      2: 1652572800000,
      3: 1652572800000,
      4: 1652572800000,
      5: 1652572800000,
      6: 1652572800000
    },
    totaldm: -Infinity,
    maxdm: -Infinity,
    lastdm: 1652572800000,
    passivedm: -Infinity,
    hasdmupgbought: {
      1: false,
      2: false,
      3: false
    },
    lastdmupgbought: {
      1: 1652572800000,
      2: 1652572800000,
      3: 1652572800000
    },
    totaldmbuybought: {
      1: 0,
      2: 0,
      3: 0
    },
    lastdmbuybought: {
      1: 1652572800000,
      2: 1652572800000,
      3: 1652572800000
    },
    chalbought: {
      norm: 1652572800000,
      ext: 1652572800000
    },
    totalchal: 0,
    lastchal: 1652572800000,
    lastchalcomp: {
      1: 1652572800000,
      2: 1652572800000,
      3: 1652572800000,
      4: 1652572800000,
      5: 1652572800000,
      6: 1652572800000,
      7: 1652572800000
    },
    totalchalcomp: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    },
    totalobjs: -Infinity,
    maxobjs: -Infinity,
    lastobj: 1652576800000,
    totalobjbuybought: {
      1: 0
    },
    lastobjbuybought: {
      1: 1652572800000
    },
    lasttick: Date.now(),
    achievedata: [],
    rowunlocked: [0],
    version: 28
  };
  music.src = "music/" + musicfiles[game.musicidx];
  game.versionstarted = game.version;
  get("nomusic").prop("class", "life");
  get('theme').attr("href", ['dark', 'light'][game.theme] + ".css");
  get("mult").html(decimal(game.mult));
  get("upg1cost").html(decimal(game.upg1cost));
  get("upg2cost").html(decimal(game.upg2cost));
  get("upg3cost").html(decimal(game.upg3cost));
  get("upg4cost").html(decimal(game.upg4cost));
  get("upg5cost").html(decimal(game.upg5cost));
  get("upg2base").html(game.upg2base);
  get("antiupg1cost").html(decimal(game.antiupg1cost));
  get("antiupg2cost").html(decimal(game.antiupg2cost));
  get("dims").html(game.dims);
  get("dimcost").html(decimal(game.dimcost));
  get("dmbuy1cost").html(decimal(game.dmbuy1cost));
  get("dmbuy2cost").html(decimal(game.dmbuy2cost));
  get("dmbuy3cost").html(decimal(game.dmbuy3cost));
  get("musicslider").prop("value", game.musicvol * 100);
  get("sfxslider").prop("value", game.sfx * 100);
  music.volume = game.musicvol;
  buy.volume = game.sfx;
  rebirth.volume = game.sfx;
  reject.volume = game.sfx;
  get("musicvolume").html(get("musicslider").prop("value"));
  get("sfxvolume").html(get("sfxslider").prop("value"));
  get("upg5base").html(2 + game.chalfin.c2 / 2)
  get("chaltotal").html(game.chalfin.total)
  get("objs").html(decimal(game.objs));
  setcolors();
  subpage('dm', 'darkmatterupg');
  subpage('obj', 'objectupgs');
  subpage('opt', 'settings');
  subpage('stat', 'mainstat');
}
function convertbooleanachieve() {
  var oldachieve = game.achievedata;
  var oldachieverow = game.rowunlocked;
  game.achievedata = []
  game.rowunlocked = []
  for (var i = 0; i < oldachieve.length; i++) {
    for (var j = 0; j < oldachieve[i].length; j++) {
      if (oldachieve[i][j]) {
        game.achievedata.push(i * 8 + j)
      }
    }
  }
  for (i = 0; i < oldachieverow.length; i++) {
    if (oldachieverow[i]) {
      game.rowunlocked.push(i)
    }
  }
  game.achievedata.splice(0, 5)
  game.rowunlocked.splice(0, 5)
}
function converteighttoten() {
  var oldachieve = game.achievedata;
  game.achievedata = []
  for (var i = 0; i < oldachieve.length; i++) {
    game.achievedata.push(oldachieve[i] % 8 + Math.floor(oldachieve[i] / 8) * 10)
  }
}
function copyStringToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-9999px"
  };
  document.body.appendChild(el);
  copyToClipboard(el);
  document.body.removeChild(el);
}
function copyToClipboard(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    el.contentEditable = true;
    el.readOnly = true;
    var range = document.createRange();
    range.selectNodeContents(el);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, Infinity);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  }
  document.execCommand("copy");
}
function save(file = false) {
  if (file) {
    var fileout = new Blob([btoa(JSON.stringify(game))], { type: "text/plain" })
    window.URL = window.URL || window.webkitURL;
    var a = document.createElement("a")
    a.href = window.URL.createObjectURL(fileout)
    a.download = "IUG Save.txt"
    a.click()
    $.notify("File exported", "success")
  } else {
    copyStringToClipboard(btoa(JSON.stringify(game)));
    $.notify("Copied game to clipboard", "success")
  }
}
function achievestats(){
  //Yea this is a big mess cant help it
  if(game.achievedata.includes(10)&&game.totalclicks<3){
    game.totalclicks = 3;
    game.maxclicks = 3;
  }
  if(game.achievedata.includes(11)&&game.totalclicks<6){
    game.totalclicks = 6;
    game.maxclicks = 6;
  }
  if(game.achievedata.includes(12)&&game.totalclicks<11.1749254){
    game.totalclicks = 11.1749254;
    game.maxclicks = 11.1749254;
  }
  if(game.achievedata.includes(13)&&game.totalclicks<26.9443983){
    game.totalclicks = 26.9443983;
    game.maxclicks = 26.9443983;
  }
  if(game.achievedata.includes(14)&&game.totalclicks<64){
    game.totalclicks = 64;
    game.maxclicks = 64;
  }
  if(game.achievedata.includes(15)&&game.totalclicks<100){
    game.totalclicks = 100;
    game.maxclicks = 100;
  }
  if(game.achievedata.includes(16)&&game.totalclicks<308.254716){
    game.totalclicks = 308.254716;
    game.maxclicks = 308.254716;
  }
  if(game.achievedata.includes(17)&&game.totalclicks<1000){
    game.totalclicks = 1000;
    game.maxclicks = 1000;
  }
  if(game.achievedata.includes(18)&&game.totalclicks<10000){
    game.totalclicks = 10000;
    game.maxclicks = 10000;
  }
  if(game.achievedata.includes(19)&&game.totalclicks<1000000){
    game.totalclicks = 1000000;
    game.maxclicks = 1000000;
  }
  if(game.antiupg1bought>0&&game.totalclicks<27){
    game.totalclicks = 27;
    game.maxclicks = 27;
  }
  if(game.antiupg2bought>0&&game.totalclicks<76){
    game.totalclicks = 76;
    game.maxclicks = 76;
  }
  if(game.achievedata.includes(0)&&game.totalbought[1]<2){
    game.totalbought[1] = 2;
    if(game.totalclicks<1){
      game.totalclicks = 1;
      game.maxclicks = 1;
    }
  }
  if(game.achievedata.includes(1)&&game.totalbought[2]<1){
    game.totalbought[2] = 1;
    if(game.totalclicks<2){
      game.totalclicks = 2;
      game.maxclicks = 2;
    }
  }
  if(game.achievedata.includes(2)&&game.totalbought[3]<1){
    game.totalbought[3] = 1;
    if(game.totalclicks<2){
      game.totalclicks = 2;
      game.maxclicks = 2;
    }
  }
  if(game.achievedata.includes(3)&&game.totalbought[4]<1){
    game.totalbought[4] = 1;
    if(game.totalclicks<4){
      game.totalclicks = 4;
      game.maxclicks = 4;
    }
  }
  if(game.achievedata.includes(4)&&game.totalbought[5]<1){
    game.totalbought[5] = 1;
    if(game.totalclicks<50){
      game.totalclicks = 50;
      game.maxclicks = 50;
    }
  }
  if(game.achievedata.includes(5)&&game.totalbought[1]<2501){
    game.totalbought[1] = 2501;
  }
  if(game.achievedata.includes(6)&&game.totalbought[2]<50){
    game.totalbought[2] = 50;
  }
  if(game.achievedata.includes(7)&&game.totalbought[3]<2500){
    game.totalbought[3] = 2500;
  }
  if(game.achievedata.includes(8)&&game.totalbought[4]<150){
    game.totalbought[4] = 150;
  }
  if(game.achievedata.includes(9)&&game.antitotalbought[1]<450){
    game.antitotalbought[1] = 450;
  }
  if(game.achievedata.includes(20)&&game.totaldim<2){
    game.totaldim = 2;
    game.maxdim = 2;
    if(game.totalclicks<12){
      game.totalclicks = 12;
      game.maxclicks = 12;
    }
  }
  if(game.achievedata.includes(21)&&game.totaldim<3){
    game.totaldim = 3;
    game.maxdim = 3;
    if(game.totalclicks<20){
      game.totalclicks = 20;
      game.maxclicks = 20;
    }
  }
  if(game.achievedata.includes(22)&&game.totaldim<4){
    game.totaldim = 4;
    game.maxdim = 4;
    if(game.totalclicks<36.5){
      game.totalclicks = 36.5;
      game.maxclicks = 36.5;
    }
  }
  if(game.achievedata.includes(23)&&game.totaldim<6){
    game.totaldim = 6;
    game.maxdim = 6;
    if(game.totalclicks<97.75){
      game.totalclicks = 97.75;
      game.maxclicks = 97.75;
    }
  }
  if(game.achievedata.includes(24)&&game.totaldim<7){
    game.totaldim = 7;
    game.maxdim = 7;
    if(game.totalclicks<log(8.8)+149){
      game.totalclicks = log(8.8)+149;
      game.maxclicks = log(8.8)+149;
    }
  }
  if(game.achievedata.includes(25)&&game.totaldim<9){
    game.totaldim = 9;
    game.maxdim = 9;
  }
  if(game.achievedata.includes(26)&&game.totaldim<10){
    game.totaldim = 10;
    game.maxdim = 10;
  }
  if(game.achievedata.includes(27)&&game.totaldim<26){
    game.totaldim = 26;
    game.maxdim = 26;
  }
  if(game.achievedata.includes(28)&&game.totaldim<69){
    game.totaldim = 69;
    game.maxdim = 69;
  }
  if(game.achievedata.includes(29)&&game.totaldim<100){
    game.totaldim = 100;
    game.maxdim = 100;
  }
  if(game.rowunlocked.includes(3)&&game.totalclicks<120){
    game.totalclicks = 120;
    game.maxclicks = 120;
  }
  if(game.totalclicks<game.maxobj){
    game.totalclicks = game.maxobj;
    game.maxclicks = game.maxobj;
  }
}
function dmachivestats(){
  if(game.achievedata.includes(30)&&game.totaldm<0){
    game.totaldm = 0;
    game.maxdm = 0;
  }
  if(game.achievedata.includes(31)&&game.totaldm<0.301029995663){
    game.totaldm = 0.301029995663;
    game.maxdm = 0.301029995663;
  }
  if(game.achievedata.includes(32)&&game.totaldmbuybought[1]<1){
    game.totaldmbuybought[1] = 1;
    if(game.totaldm<0.698970004){
      game.totaldm = 0.698970004;
      game.maxdm = 0.698970004;
    }
  }
  if(game.achievedata.includes(33)&&!game.hasdmupgbought[2]){
    game.hasdmupgbought[2] = true;
    if(game.totaldm<log(25)){
      game.totaldm = log(25);
      game.maxdm = log(25);
    }
  }
  if(game.achievedata.includes(34)&&game.totaldmbuybought[2]<1){
    game.totaldmbuybought[2] = 1;
    if(game.totaldm<1.602059991){
      game.totaldm = 1.602059991;
      game.maxdm = 1.602059991;
    }
  }
  if(game.achievedata.includes(35)&&game.totaldm<6){
    game.totaldm = 6;
    game.maxdm = 6;
  }
  if(game.achievedata.includes(36)&&game.totaldm<12){
    game.totaldm = 12;
    game.maxdm = 12;
  }
  if(game.achievedata.includes(37)&&game.totaldm<21){
    game.totaldm = 21;
    game.maxdm = 21;
  }
  if(game.achievedata.includes(38)&&game.totaldm<69){
    game.totaldm = 69;
    game.maxdm = 69;
  }
  if(game.achievedata.includes(39)&&game.totaldm<120){
    game.totaldm = 120;
    game.maxdm = 120;
  }
  if(game.rowunlocked.includes(4)&&game.totaldm<log(8)+6){
    game.totaldm = log(8)+6;
    game.maxdm = log(8)+6;
  }
  if(game.chalextend&&game.totaldm<log(4)+10){
    game.totaldm = log(4)+10;
    game.maxdm = log(4)+10;
  }
  if(game.rowunlocked.includes(5)&&game.totaldm<225){
    game.totaldm = 225;
    game.maxdm = 225;
  }
}
function chalachieve(){
  if(game.achievedata.includes(41)&&game.totalchalcomp[1]<1){
    game.totalchalcomp[1] = 1;
  }
  if(game.achievedata.includes(42)&&game.totalchalcomp[2]<1){
    game.totalchalcomp[2] = 1;
  }
  if(game.achievedata.includes(43)&&game.totalchalcomp[3]<1){
    game.totalchalcomp[3] = 1;
  }
  if(game.achievedata.includes(44)&&game.totalchalcomp[4]<1){
    game.totalchalcomp[4] = 1;
  }
  if(game.achievedata.includes(45)&&game.totalchalcomp[5]<1){
    game.totalchalcomp[5] = 1;
  }
  if(game.achievedata.includes(46)&&game.totalchalcomp[6]<1){
    game.totalchalcomp[6] = 1;
  }
  if(game.achievedata.includes(47)&&game.totalchalcomp[1]<25){
    game.totalchalcomp[1] = 25;
  }
  if(game.achievedata.includes(48)&&game.totalchal<24){
    game.totalchal = 24;
  }
}
function handleoldversions() {
  if(game.version<15){
    game.versionstarted = game.version;
    game.startplaying = Date.now();
  }
  if (game.version < 1) {
    alert('Sorry, I can\'t handle that.');
  }
  if (game.version < 3) {
    game.version = 3;
    if (64 < game.clicks && game.clicks < Math.log10(4.2) + 69) {
      achievedata[1][4] = true;
    }
  }
  if (game.version < 4) {
    game.version = 4;
    if (game.dm >= 4) {
      achievedata[3][6] = true;
    }
  }
  if (game.version < 5) {
    game.version = 5;
    convertbooleanachieve()
  }
  if (game.version < 6) {
    game.version = 6;
    game.chalfin.c4 = 0;
    game.chalfin.c5 = 0;
    game.chalfin.c6 = 0;
  }
  if (game.version < 7) {
    game.version = 7;
    converteighttoten()
  }
  if (game.version < 9) {
    game.version = 9;
    game.isupg1enabled = game.isupg1bought;
    game.isupg2enabled = game.isupg2bought;
    game.isupg3enabled = game.isupg3bought;
    game.isupg4enabled = game.isupg4bought;
    game.isupg5enabled = game.isupg5bought;
    game.isdmupg3enabled = game.isdmupg3bought;
  }
  if (game.version < 10) {
    game.version = 10;
    game.chalfin.c7 = 0;
  }
  if (game.version < 13) {
    game.version = 13;
    game.amrp = game.armp;
  }
  if (game.version < 14) {
    game.version = 14;
    game.amrpboost = (game.amrp === -Infinity ? 1 : Math.sqrt(game.amrp / 7.5 + 1.002001))
  }
  if(game.version<18){
    game.version = 18;
    game.totalclicks = game.clicks;
    game.maxclicks = game.clicks;
    game.totalbought = {
      1: game.upg1bought,
      2: game.upg2bought,
      3: game.upg3bought,
      4: game.upg4bought,
      5: game.upg5bought
    }
    game.totaldim = game.dims;
    game.maxdim = game.dims;
    game.totalantibought = {
      1: game.antiupg1bought,
      2: game.antiupg2bought
    }
    achievestats();
  }
  if(game.version<19){
    game.version = 19;
    if(game.clicks>game.totalclicks){
      game.totalclicks = game.clicks;
    }
  }
  if(game.version<20){
    game.version = 20;
    game.totalclicks = game.clicks;
    game.maxclicks = game.clicks;
    game.totalbought = {
      1: game.upg1bought,
      2: game.upg2bought,
      3: game.upg3bought,
      4: game.upg4bought,
      5: game.upg5bought
    }
    game.totaldim = game.dims;
    game.maxdim = game.dims;
    game.totalantibought = {
      1: game.antiupg1bought,
      2: game.antiupg2bought
    }
    achievestats();
  }
  if(game.version<22){
    game.version = 22;
    game.totaldm = game.dm;
    game.maxdm = game.dm;
    game.hasdmupgbought = {
      1: game.isdmupg1bought,
      2: game.isdmupg2bought,
      3: game.isdmupg3bought
    }
    game.totaldmbuybought = {
      1: game.dmbuy1bought,
      2: game.dmbuy2bought,
      3: game.dmbuy3bought
    }
    dmachivestats();
  }
  if(game.version<23){
    game.version = 23;
    game.totalchal = game.chalfin.total;
    game.totalchalcomp = {
      1: game.chalfin.c1,
      2: game.chalfin.c2,
      3: game.chalfin.c3,
      4: game.chalfin.c4,
      5: game.chalfin.c5,
      6: game.chalfin.c6,
      7: game.chalfin.c7
    }
    chalachieve();
  }
  if(game.version<27){
    game.version = 27;
    if(game.totalantibought[1]>=1652572800000){
      alert("Hey, your save file was broken by a bug that ment we set the date as the total number of times you bought an antimatter upgrade. Would you like if your antimatter stats were inaccurate?");
      game.totalantibought[1] = game.totalantibought[1]-1652572800000
      game.totalantibought[2] = game.totalantibought[2]-1652572800000
      if(game.achievedata.includes(9)&&game.antitotalbought[1]<450){
        game.antitotalbought[1] = 450;
      }
      if(game.totalantibought[1]<game.antiupg1bought){
        game.antitotalbought[1] = game.antiupg1bought
      }
      if(game.totalantibought[2]<game.antiupg2bought){
        game.antitotalbought[2] = game.antiupg2bought
      }
      game.lastantibought = {
        1: 1652572800000,
        2: 1652572800000
      }
    }
  }
  if(game.version<28){
    game.version = 28;
    game.totalobjs = game.objs;
    game.maxobjs = game.objs;
    game.maxobjm = game.maxobj;
    game.totalobjbuybought = {
      1: game.objbuy1bought
    }
    if(game.achievedata.includes(51)&&game.totalobjs<log(2)){
      game.totalobjs = log(2);
      game.maxobjs = log(2);
    }
  }
}
function loadsave() {
  if (gsave != null) {
    loadgame(gsave);
  }
}
function loadgame(gamedata) {
  if (game.musicidx === 0) {
    get("nomusic").prop("class", "button")
  } else {
    $($(get("musictable").prop("children")[game.musictrack + 1]).prop("children")[game.musicidx - 1]).prop("children")[0].className = "button";
  }
  gamedata = JSON.parse(atob(gamedata));
  if(Array.isArray(gamedata)){
    if(confirm("WARNING: You are trying to load a save that was made with a DEPRECATED saving system. Your save may be corrupted. I honestly don't even know where on earth you could of got such an old save from over a year ago. Are you sure you want to load this save?")){
      let varnames = ["clicks", "basecs", "cs", "mult", "upg1cost", "upg1bought", "upg2cost", "upg2bought", "upg3cost", "upg3bought", "upg4cost", "upg4bought", "upg5cost", "upg5bought", "dims", "antiupg1cost", "antiupg1bought", "antiupg2cost", "antiupg2bought", "isupg1bought", "isupg2bought", "isupg3bought", "isupg4bought", "isupg5bought", "dm", "dmboost", "dmmult", "isdmupg1bought", "dmbuy1cost", "dmbuy1bought", "isdmupg2bought", "dmbuy2cost", "dmbuy2bought", "theme", "musicidx", "sfx"];
      let version = gamedata[gamedata.length-1];
      if(version<0.16){
        varnames = ["clicks", "basecs", "cs", "mult", "upg1cost", "upg1bought", "upg2cost", "upg2bought", "upg3cost", "upg3bought", "upg4cost", "upg4bought", "upg5cost", "upg5bought", "dims", "antiupg1cost", "antiupg1bought", "antiupg2cost", "antiupg2bought", "isupg1bought", "isupg2bought", "isupg3bought", "isupg4bought", "isupg5bought", "dm", "dmboost", "dmmult", "isdmupg1bought", "dmbuy1cost", "dmbuy1bought", "theme", "musicidx", "sfx"];
      }
      for(let i in varnames){
        game[varnames[i]] = gamedata[varnames[i]];
      }
      game.version = 1;
    }
  }else{
    for (var i in gamedata) {
      if (gamedata[i] === null) {
        game[i] = -Infinity;
      } else {
        game[i] = gamedata[i];
      }
    }
  }
  handleoldversions()
  if (game.musicidx === 0) {
    music.pause();
  } else {
    music.src = "music/" + musicfiles[game.musicidx][game.musictrack];
    music.currentTime = 0;
    music.play();
  }
  var diff = Date.now() - game.lasttick
  gameloop(diff);
  if (game.musicidx === 0) {
    get("nomusic").prop("class", "lifebutton")
  } else {
    $($(get("musictable").prop("children")[game.musictrack + 1]).prop("children")[game.musicidx - 1]).prop("children")[0].className = "lifebutton";
  }
  $(".music").html(musicnames[game.musicidx]);
  $('#theme').attr("href", ['dark', 'light'][game.theme] + ".css");
  $("#mult").html(decimal(game.mult));
  $("#upg1cost").html(decimal(game.upg1cost));
  $("#upg2cost").html(decimal(game.upg2cost));
  $("#upg3cost").html(decimal(game.upg3cost));
  $("#upg4cost").html(decimal(game.upg4cost));
  $("#upg5cost").html(decimal(game.upg5cost));
  $("#upg2base").html(game.upg2base);
  $("#antiupg1cost").html(decimal(game.antiupg1cost));
  $("#antiupg2cost").html(decimal(game.antiupg2cost));
  $("#dims").html(game.dims);
  $("#dimcost").html(decimal(game.dimcost));
  $("#dm").html(decimal(game.dm));
  $("#dmboost").html(Math.round(game.dmboost * 1000) / 1000);
  $("#dmbuy1cost").html(decimal(game.dmbuy1cost));
  $("#dmbuy2cost").html(decimal(game.dmbuy2cost));
  $("#dmbuy3cost").html(decimal(game.dmbuy3cost));
  $("#chaltotal").html(game.chalfin.total);
  $("#maxobj").html(decimal(game.maxobj));
  game.musicvol = $("#musicslider").prop("value") / 100;
  game.sfx = $("#sfxslider").prop("value") / 100;
  music.volume = game.musicvol;
  buy.volume = game.sfx;
  rebirth.volume = game.sfx;
  reject.volume = game.sfx;
  $("#musicvolume").html($("#musicslider").prop("value"));
  $("#sfxvolume").html($("#sfxslider").prop("value"));
  $("#sfxvolume").html($("#sfxslider").prop("value"));
  $("#upg5base").html(2 + game.chalfin.c2 / 2);
  $("#objbuy1cost").html(decimal(game.objbuy1cost));
  $("#pl").prop("value", game.place);
  $("#abbrbefore").prop("value", game.start.before);
  $("#abbrafter").prop("value", game.start.after);
  $("#XeY").prop("checked", game.notate.XeY);
  $("#XeYeZ").prop("checked", game.notate.XeYeZ);
  setcolors();
  subpage('dm', 'darkmatterupg');
  subpage('obj', 'objectupgs');
  subpage('opt', 'settings');
  subpage('stat', 'mainstat');
}
function load(file = false) {
  if (file) {
    var gameloaded = "";
    reader.readAsText(document.getElementById("file").files[0]);
    window.setTimeout(function() {
      gameloaded = reader.result
      if (gameloaded !== "") {
        loadgame(gameloaded);
      }
      window.setTimeout(() => {
        window.location.reload()
      }, 200)
    }, 100)
  } else {
    loadgame(prompt("Paste in your save.\nWARNING: This will overwrite your current save."));
  }
  $.notify("Loaded save file.", "success")
}
