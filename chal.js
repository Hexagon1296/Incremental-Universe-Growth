var chalreq = [100 + log(2), 65, 59 + log(3), 20 + log(5.4), 25 + log(9), 100 + log(4.5), 180 + log(7.5)];
let ocbefore = {
  isupg1bought: false,
  isupg2bought: false,
  isupg3bought: false,
  isupg4bought: false,
  isupg5bought: false,
  isupg6bought: false,
  dm: -Infinity,
  isdmupg1bought: false,
  isdmupg2bought: false,
  isdmupg3bought: false,
}
function unlockchal() {
  if (game.dm >= 6 + log(8)) {
    game.ischalunlocked = true;
    buy.currentTime = 0;
    buy.play();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function extendchal() {
  if (game.dm >= 10 + log(4)) {
    game.chalextend = true;
    buy.currentTime = 0;
    buy.play();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function inchal(chal) {
  if (!(isNaN(chal))) {
    return game.chal.includes(chal);
  } else {
    return game.chal.indexOf(false) !== 0;
  }
}
function enterchal(chal, idx) {
  if (isNaN(idx)) { idx = 0; }
  if (game.chal[idx] === false && confirm('Are you sure you want to enter this challenge?')) {
    game.chal[idx] = chal;
    game.clicks = -Infinity;
    game.basecs = 0;
    game.mult = 0;
    game.cs = 0;
    game.upg1cost = 1;
    game.upg1bought = 1;
    game.upg2cost = 2;
    game.upg2bought = 0;
    game.upg2base = 1.5;
    game.upg3cost = 2;
    game.upg3bought = 0;
    game.upg4cost = 4;
    game.upg4bought = 0;
    game.upg5cost = 50;
    game.upg5bought = 0;
    game.antiupg1cost = 27;
    game.antiupg1bought = 0;
    game.antiupg2cost = 76;
    game.antiupg2bought = 0;
    game.dims = 1;
    game.dimcost = 12;
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
  }
}
function exitchal(idx) {
  if (!(game.chal[1] === false)) return;
  if (!(game.chal[idx] === false) && confirm('Are you sure you want to exit the challenge?')) {
    game.chal[idx] = false;
    game.clicks = -Infinity;
    game.basecs = 0;
    game.mult = 0;
    game.cs = 0;
    game.upg1cost = 1;
    game.upg1bought = 1;
    game.upg2cost = 2;
    game.upg2bought = 0;
    game.upg3cost = 2;
    game.upg3bought = 0;
    game.upg4cost = 4;
    game.upg4bought = 0;
    game.upg5cost = 50;
    game.upg5bought = 0;
    game.antiupg1cost = 27;
    game.antiupg1bought = 0;
    game.antiupg2cost = 76;
    game.antiupg2bought = 0;
    game.dims = 1;
    game.dimcost = 12;
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
  }
}
function completechal() {
  if (game.clicks >= chalreq[game.chal[0] - 1]) {
    game.chalfin.total++;
    Function("game.chalfin.c" + game.chal[0] + "++")()
    $("#chaltotal").html(game.chalfin.total)
    if (game.chal[0] == 2) {
      $("#upg5base").html(2 + game.chalfin.c2 / 2)
    }
    game.chal[0] = false;
    game.clicks = -Infinity;
    game.basecs = 0;
    game.mult = 0;
    game.cs = 0;
    game.upg1cost = 1;
    game.upg1bought = 1;
    game.upg2cost = 2;
    game.upg2bought = 0;
    game.upg2base = 1.5;
    game.upg3cost = 2;
    game.upg3bought = 0;
    game.upg4cost = 4;
    game.upg4bought = 0;
    game.upg5cost = 50;
    game.upg5bought = 0;
    game.antiupg1cost = 27;
    game.antiupg1bought = 0;
    game.antiupg2cost = 76;
    game.antiupg2bought = 0;
    game.dims = 1;
    game.dimcost = 12;
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
  }
}
function enteroc(oc) {
  if (!(game.oc)) {
    let enter = true;
    if (game.occonf) {
      enter = confirm("Are you sure you want to enter this Objective Challenge? You're automation upgrades will be removed, although you will get them back");
    }
    if (enter) {
      if (oc == 1) {
        game.chal[0] = prompt("Select your first challenge");
        game.chal[1] = prompt("Select your second challenge");
        if (game.chal[1] == game.chal[0]) {
          while (game.chal[1] == game.chal[0]) {
            game.chal[1] = prompt("You already picked that challenged. Please pick a new one.");
          }
        }
      } else {
        game.chal = [false, false]
      }
      if (game.ocobjreset) getobjs();
      game.oc = oc;
      for (let i in ocbefore) {
        ocbefore[i] = game[i] - (i == "dm" ? log(12) : 0);
      }
      game.clicks = -Infinity;
      game.basecs = 0;
      game.mult = 0;
      game.cs = 0;
      game.upg1cost = 1;
      game.upg1bought = 1;
      game.upg2cost = 2;
      game.upg2bought = 0;
      game.upg2base = 1.5;
      game.upg3cost = 2;
      game.upg3bought = 0;
      game.upg4cost = 4;
      game.upg4bought = 0;
      game.upg5cost = 50;
      game.upg5bought = 0;
      game.antiupg1cost = 27;
      game.antiupg1bought = 0;
      game.antiupg2cost = 76;
      game.antiupg2bought = 0;
      game.dims = 1;
      game.dimcost = 12;
      game.isupg1bought = false;
      game.isupg2bought = false;
      game.isupg3bought = false;
      game.isupg4bought = false;
      game.isupg5bought = false;
      game.isupg6bought = false;
      game.dm = -Infinity;
      game.dmboost = 1;
      game.dmmult = 0;
      game.dmbuy1bought = 0;
      game.dmbuy1cost = log(5);
      game.dmbuy2bought = 0;
      game.dmbuy2cost = log(40);
      game.dmbuy3bought = 0;
      game.dmbuy3cost = 6;
      game.isdmupg1bought = false;
      game.isdmupg2bought = false;
      game.isdmupg3bought = false;
    }
  }
}