var gsave = localStorage.getItem("iugsave");
var game;
/* 
 
  OBJECT NOTES:
  Objects should end about 1e1e10 universe size
  SM is early-mid objects feature
  OBJECTIVE CHALLENGES NOTES:
  Resets:
  - Universe size
  - Universe growth
  - Dimensions
  - Main upgrades
  - Antimatter upgrades
  - Automation (You get them back)maxob
  - Dark matter (You get 1/12 of what you had back)
  - Dark matter upgrades and buyables (You get the upgrades back)
  Goals: In DM
  You don't gain 1 dimension per second
  No i do NOT want Omega Challenge repeat
  The actual challenges:
  OC1:
    Effects: No i do NOT want Omega Challenge repeat
    Goal: 1e100 DM
    Reward: Challenge boost is raised by completions
  OC2:
    Effects: Dark matter boost is stuck at ^0.0001, you gain 1/1,000,000 as much dark matter, you can't enter any challenges, and all dark matter upgrades and buyables are pointless.
  OC3:
    Effects: Automation is disabled, only upgrades 1 and dimenions exist, antimatter is even worse than in challenge 4, cost scales really badly, and AMRP's boost is capped at ^1.01
  ENERGY NOTES:
  Yellow color
  When you energy reset, start with 1 more object (object count will say 0 (+x), where x is energy resets)
  Objects with energy multiply all objects' boost to DM
  Upgrades should be like singularity functions in OM [pre-layer idea]. One should be autogain objects (1/s/e where e is your energy), another one unlocks buyables to speed up that.
  Subpage: life (unlocked midway, prestige mechanic). Green color.
  Life has a smartness meter, and there's milestones of getting smart (0 smartness: gain energy per reset every second, then milestones of mults/exps of everything)
  Should end about 1e1e30 universe size
  GOD NOTES:
  White color
  Requires energy and smartness to reset, generating god power, multiplying EVERY boost by god power, from the first main upgrade to the last energy upgrade. Basically an Ω-Lλγers layer but it's IUG (Yes, that does include god power generators, god power generator generators, etc.).
  Should end about 1e1e100 universe size
  MULTIVERSE NOTES:
  Purple color
  Requires god power to reset
  Multiplies god power boost
  ONLY upgrades and challenges, nothing else
  Challenges will disable everything except multiverse boost and upgrade 1, with main having completely different upgrades in challenges
  Every challenge goal will be 1e125
  Should end 1e1.798e308 universe size. Then, the game is over. (Because break_infinity breaks here).
 	OTHER NOTES:
  Every prestige layer should have challenges
  Ability to enable/disable automators
  Completely rebalence the game
*/
var result = 0;
var comma = [];
var buy = new Audio("sfx/Buy.wav");
var reject = new Audio("sfx/Reject.mp3");
var rebirth = new Audio("sfx/Rebirth.wav");
var music = new Audio();
var objgain;
var nextobj = 225;
var musicfiles = ["",
  ["Relaxing.mp3", "Relaxing2.mp3", "Relaxing3.mp3", "Relaxing4.wav", "Relaxing5.wav", "Relaxing6.mp3"],
  ["Calm.mp3", "Calm2.mp3", "Calm3.mp3", "Calm4.mp3"],
  ["Bouncy.mp3", "Bouncy2.mp3", "Bouncy3.mp3", "Bouncy4.mp3", "Bouncy5.wav", "Bouncy6.wav", "Bouncy7.mp3", "Bouncy8.mp3"],
  ["Rock.mp3", "Rock2.mp3", "Rock3.wav", "Rock4.wav", "Rock5.mp3", "Rock6.mp3", "Rock7.mp3", "Rock8.mp3", "Rock9.mp3"],
  ["Intense.mp3", "Intense2.mp3", "Intense3.mp3", "Intense4.mp3", "Intense5.mp3", "Intense6.mp3", "Intense7.mp3", "Intense8.mp3", "Intense9.mp3", "Intense10.mp3", "Intense11.mp3", "Intense12.mp3"]
];
var musicnames = [
  ["Soul and Mind", "Celeste - Quiet and Falling", "Kevin Macelod - Hard Boiled", "Super Mario World Game Over Remix Alternate Version (Part 2)", "???", "DM DOKURO - sanctuary"],
  ["A Hat in Time - Scootin' Through Clocktowers Beneath the Sea", "Diamond Ortiz - Mirror Mirror", "Bund6", "Celeste - Ressurections"],
  ["Better Off Alone (DJ Glejs Remix)", "Yumi Rose - Tired", "Arseniy Shkliaeva - Nuclearoids", "Mario Kart 8 - Toad's Turnpike", "Centerpiece", "Dimrain47 - Infernoplex", "ParagonX9 - Red 13", "Dimrain47 - Forsaken Neon"],
  ["Miami Hotline Vol.3 - Demonicity", "DM DOKURO - Universal Collapse", "Underwater Beats - Delete!", "Glitchtale OST - Bring it On [Dual Mix]", "Helbinde - Solace of Oblivion", "F-777 - Space Battle", "Dark, Darker, Yet Darker", "Space - Abyss", "???"],
  ["A Hat in Time - Death Wish", "Super Mario Galaxy 2 - The Perfect Run (Part 3)", "In the Final - Mario & Luigi: Bowser's Inside Story (GaMetal Remix)", "Yoshi's Island Final Boss Metal Remix", "Synergetic Enigma", "Xtrullor - The Armor of God", "Fight Fight Fight", "Glitchtale - Dreemurs United vs. Betty", "Rose at Midnight", "???", "???", "War (Thousand March) - RichaadEB"]
]
var jtohmusic = [
  ["", "CoHaD: Floor 9", "ToTS: Floor 1", "", "", "Zone 1"],
  ["ToS: Floor 4", "", "", "CoIS: Floor 8"],
  ["ToAST: Floor 2", "ToPHaT: Floors 5 & 6", "", "ToES: Floors 8-10", "", "ToFN: Floor 6", "", "ToFN: Floors 7 & 8"],
  ["ToR: Floors 7-9", "ToC: Floors 7 & 8", "", "", "", "", "", "", "???"],
  ["CoP: Floor 1", "", "", "", "ToTH: Floor 10", "", "ToSP: Floor 9", "ToCR: Floor 10", "ToIB: Floor 9", "", "", ""]
]
music.loop = true;
reset();
if (gsave != null) {
  loadsave();
}
let amrpreq = [log(3), log(8), log(1.5) + 1, log(2) + 1, log(3) + 1, log(3.6) + 1, log(4.5) + 1, log(7.5) + 1, 2, log(3) + 2, log(4.5) + 2, log(5) + 2, log(7.5) + 2, 3, log(3) + 3, log(6) + 3, 4, log(5) + 4, 5, 6, log(9) + 6, log(5) + 7, 10, 11, 12]
switchpage('main');
function buymainupg1(auto) {
  if (game.clicks >= game.upg1cost) {
    game.clicks = subtract(game.clicks, game.upg1cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.upg1bought++;
    game.totalbought[1]++;
    game.lastbought[1] = Date.now();
    game.basecs = log(game.upg1bought);
    game.cs = game.basecs + game.mult;
    game.upg1cost += log(1.1);
    get("upg1cost").html(decimal(game.upg1cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buymainupg2(auto) {
  if (game.clicks >= game.upg2cost && !(inchal(5) || inchal(7))) {
    game.clicks = subtract(game.clicks, game.upg2cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.upg2bought++;
    game.totalbought[2]++;
    game.lastbought[2] = Date.now();
    game.mult = log(game.upg2base) * game.upg2bought;
    game.cs = game.basecs + game.mult;
    if (inchal(2)) {
      game.upg2cost = Math.pow(game.upg2cost, 1.3) + 0.13
    } else if (game.upg2bought <= 10 + game.upg5bought * (2 + game.chalfin.c2 / 2)) {
      game.upg2cost = game.upg2bought * log(3) + 2;
    } else {
      game.upg2cost = 4 + (Math.pow(1.2, game.upg2bought - (10 + game.upg5bought * 2)) * ((log(3) * 10) - 2));
    }
    get("mult").html(decimal(game.mult));
    get("upg2cost").html(decimal(game.upg2cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buymainupg3(auto) {
  if (game.clicks >= game.upg3cost) {
    game.clicks = subtract(game.clicks, game.upg3cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.upg3bought++;
    game.totalbought[3]++;
    game.lastbought[3] = Date.now();
    game.upg1cost -= 0.69897000433;
    game.upg3cost += 0.39794000867;
    get("upg1cost").html(decimal(game.upg1cost));
    get("upg3cost").html(decimal(game.upg3cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buymainupg4(auto) {
  if (game.clicks >= game.upg4cost && !(inchal(5) || inchal(7))) {
    game.clicks = subtract(game.clicks, game.upg4cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.upg4bought++;
    game.upg2base += 0.5;
    game.totalbought[4]++;
    game.lastbought[4] = Date.now();
    game.mult = log(game.upg2base) * game.upg2bought;
    game.cs = game.basecs + game.mult;
    game.upg4cost += game.upg4bought / 1.5 + 0.5 - (Math.log(1.1) * game.objbuy1bought);
    get("mult").html(decimal(game.mult));
    get("upg4cost").html(decimal(game.upg4cost));
    get("upg2base").html(game.upg2base);
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function maxall(auto){
  let total = 0;
  let oldmincost = Infinity;
  while(true){
    let min = 1;
    let mincost = Infinity;
    for(let i = 1;i<6;i++){
      let cost = game["upg"+String(i)+"cost"];
      if(cost<mincost){
        min = i;
        mincost = cost;
      }
    }
    if(mincost>game.clicks||oldmincost==mincost){
      if(!auto){
        if(total==0){
          reject.currentTime = 0;
          reject.play();
        }else{
          buy.currentTime = 0;
          buy.play();
        }
      }
      return;
    }
    if(min==1&&(!auto||game.upg1bought<=25||mincost<game.clicks-2)) buymainupg1(true);
    if(min==2&&(!auto||game.isupg2bought)) buymainupg2(true);
    if(min==3&&(!auto||mincost<game.clicks-2)) buymainupg3(true);
    if(min==4&&(!auto||game.isupg2bought)) buymainupg4(true);
    if(min==5&&((!auto||game.ishelp7bought)&&game.ishelp5bought)) buymainupg5(true);
    if(min==1||min==3||((min==2||min==4)&&(!auto||game.isupg2bought))||(min==5&&((!auto||game.ishelp7bought)&&game.ishelp5bought))) total++;
    oldmincost = mincost
  }
}
function buymaxall(){
  if (game.clicks>=14+log(3)&&!(game.ishelp1bought)) {
    game.clicks = subtract(game.clicks,14+log(3));
    buy.currentTime = 0;
    buy.play();
    game.isupg1bought = true;
    game.autobought[7] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buymainupg5(auto) {
  if (game.clicks >= game.upg5cost && !(inchal(5) || inchal(2))) {
    game.clicks = subtract(game.clicks, game.upg5cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.upg5bought++;
    game.totalbought[5]++;
    game.lastbought[5] = Date.now();
    if (game.upg2bought <= 10 + game.upg5bought * 2) {
      game.upg2cost = game.upg2bought * log(3) + 2;
    } else {
      game.upg2cost = 4 + (Math.pow(1.2, game.upg2bought - (10 + game.upg5bought * 2)) * ((log(3) * 10) - 2));
    }
    game.upg5cost += 5 + game.upg5bought;
    get("upg2cost").html(decimal(game.upg2cost));
    get("upg5cost").html(decimal(game.upg5cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buyantiupg1(auto) {
  if (game.clicks >= game.antiupg1cost && !(inchal(1))) {
    game.clicks = subtract(game.clicks, game.antiupg1cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.antiupg1bought++;
    game.totalantibought[1]++;
    game.lastantibought[1] = Date.now();
    game.antiupg1cost += Math.sqrt(game.antiupg1bought);
    get("antiupg1cost").html(decimal(game.antiupg1cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buyantiupg2(auto) {
  if (game.clicks >= game.antiupg2cost && !(inchal(1) || inchal(5))) {
    game.clicks = subtract(game.clicks, game.antiupg2cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.antiupg2bought++;
    game.totalantibought[2]++;
    game.lastantibought[2] = Date.now();
    game.antiupg2cost += Math.pow(game.antiupg2bought + 1, 2);
    get("antiupg2cost").html(decimal(game.antiupg2cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buydim(auto) {
  if (game.clicks >= game.dimcost && !(inchal(3) || inchal(7))) {
    if (!(auto)) {
      rebirth.currentTime = 0;
      rebirth.play();
    }
    game.totaldim++;
    game.lastdim = Date.now();
    if (!(game.isupg6bought)) {
      game.clicks = -Infinity;
      game.basecs = 0;
      game.mult = 0;
      game.cs = 0;
      game.upg1cost = 1;
      game.upg2cost = 2;
      game.upg3cost = 2;
      game.upg4cost = 4;
      game.upg2base = 1.5;
      game.upg1bought = 1;
      game.upg2bought = 0;
      game.upg3bought = 0;
      game.upg4bought = 0;
    }
    game.dims++;
    if (game.dims < 5) {
      game.dimcost += (game.dims - 1) * 8 + (game.dims - 2) / 2;
    } else {
      game.dimcost += (Math.pow(game.dims, 2) * 1.45) / Math.pow(1.05, game.chalfin.c3);
    }
    if (!(game.isupg6bought) || inchal(3) || inchal(7)) {
      get("mult").html(1);
      get("upg1cost").html(10);
      get("upg2cost").html(100);
      get("upg3cost").html(100);
      get("upg4cost").html("10,000");
      get("upg2base").html(1.5);
    }
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buydm() {
  if (game.clicks >= 120) {
    game.dm = add(game.dm, game.dmgain);
    game.totaldm = add(game.totaldm, game.dmgain);
    game.lastdm = Date.now();
    game.clicks = -Infinity;
    rebirth.currentTime = 0;
    rebirth.play();
    game.basecs = 0;
    game.mult = 0;
    game.cs = 0;
    game.upg1cost = 1;
    game.upg2cost = 2;
    game.upg3cost = 2;
    game.upg4cost = 4;
    game.upg5cost = 50;
    game.upg2base = 1.5;
    game.upg1bought = 1;
    game.upg2bought = 0;
    game.upg3bought = 0;
    game.upg4bought = 0;
    game.upg5bought = 0;
    game.antiupg1bought = 0;
    game.antiupg1cost = 27;
    game.antiupg2bought = 0;
    game.antiupg2cost = 76;
    if (game.subj < 9) game.dims = 1;
    game.dimcost = 12;
    get("mult").html(1);
    get("upg1cost").html("10");
    get("upg2cost").html("100");
    get("upg3cost").html("100");
    get("upg4cost").html("10,000");
    get("upg5cost").html("1e50");
    get("upg2base").html("1.5");
    get("antiupg1cost").html("1e27");
    get("antiupg2cost").html("1e76");
    get("dimcost").html("1e12");
    get("dims").html("1");
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buydmupg1() {
  if (game.dm >= log(2) && !(game.isdmupg1bought)) {
    game.dm = subtract(game.dm, log(2));
    game.hasdmupgbought[1] = true;
    game.lastdmupgbought[1] = Date.now();
    buy.currentTime = 0;
    buy.play();
    game.isdmupg1bought = true;
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buydmbuy1(auto) {
  if (game.dm >= game.dmbuy1cost) {
    game.dm = subtract(game.dm, game.dmbuy1cost);
    game.totaldmbuybought[1]++;
    game.lastdmbuybought[1] = Date.now();
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.dmmult += log(2);
    game.dmbuy1cost += 0.5;
    game.dmbuy1bought++;
    get("dmbuy1cost").html(decimal(game.dmbuy1cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function buydmupg2() {
  if (game.dm >= log(25) && !(game.isdmupg2bought)) {
    game.dm = subtract(game.dm, log(25));
    game.hasdmupgbought[2] = true;
    game.lastdmupgbought[2] = Date.now();
    buy.currentTime = 0;
    buy.play();
    game.isdmupg2bought = true;
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buydmbuy2(auto) {
  if (game.dm >= game.dmbuy2cost) {
    game.dm = subtract(game.dm, game.dmbuy2cost);
    if (!(auto)) {
      buy.currentTime = 0;
      buy.play();
    }
    game.totaldmbuybought[2]++;
    game.lastdmbuybought[2] = Date.now();
    game.dmbuy2bought++;
    game.dmbuy2cost += log(1.5);
    get("dmbuy2cost").html(decimal(game.dmbuy2cost));
  } else {
    if (!(auto)) {
      reject.currentTime = 0;
      reject.play();
    }
  }
}
function maxalldm(){
  let total = 0;
  let oldmincost = Infinity;
  while(true){
    let min = 1;
    let mincost = Infinity;
    for(let i = 1;i<2;i++){
      let cost = game["dmbuy"+String(i)+"cost"];
      if(cost<mincost){
        min = i;
        mincost = cost;
      }
    }
    if(mincost>game.dm||oldmincost==mincost){
      if(!auto){
        if(total==0){
          reject.currentTime = 0;
          reject.play();
        }else{
          buy.currentTime = 0;
          buy.play();
        }
      }
      return;
    }
    if(min==1) buydmbuy1(true);
    if(min==2) buydmbuy2(true);
}
function buydmbuy3() {
  if (game.dm >= game.dmbuy3cost) {
    game.dm = subtract(game.dm, game.dmbuy3cost);
    game.totaldmbuybought[3]++;
    game.lastdmbuybought[3] = Date.now();
    buy.currentTime = 0;
    buy.play();
    game.dmbuy3bought++;
    game.dmbuy3cost += Math.sqrt(game.dmbuy3bought) * 2;
    get("dmbuy3cost").html(decimal(game.dmbuy3cost));
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg1() {
  if (game.clicks >= 60 && !(game.isupg1bought)) {
    game.clicks = subtract(game.clicks, 60);
    buy.currentTime = 0;
    buy.play();
    game.isupg1bought = true;
    game.autobought[1] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg2() {
  if (game.clicks >= 87 && !(game.isupg2bought)) {
    game.clicks = subtract(game.clicks, 87);
    buy.currentTime = 0;
    buy.play();
    game.isupg2bought = true;
    game.autobought[2] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg3() {
  if (game.clicks >= 129 && !(game.isupg3bought)) {
    game.clicks = subtract(game.clicks, 129);
    buy.currentTime = 0;
    buy.play();
    game.isupg3bought = true;
    game.autobought[3] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg4() {
  if (game.clicks >= 135 && !(game.isupg4bought)) {
    game.clicks = subtract(game.clicks, 135);
    buy.currentTime = 0;
    buy.play();
    game.isupg4bought = true;
    game.autobought[4] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg5() {
  if (game.clicks >= 145 && !(game.isupg5bought)) {
    game.clicks = subtract(game.clicks, 145);
    buy.currentTime = 0;
    buy.play();
    game.isupg5bought = true;
    game.autobought[5] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg6() {
  if (game.clicks >= 180 && !(game.isupg6bought)) {
    game.clicks = subtract(game.clicks, 180);
    buy.currentTime = 0;
    buy.play();
    game.isupg6bought = true;
    game.autobought[6] = Date.now();
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyupg7() {
  if (game.dm >= log(3.333) + 96 && !(game.isdmupg3bought)) {
    game.dm = subtract(game.dm, log(3) + 96);
    game.hasdmupgbought[3] = true;
    game.lastdmupgbought[3] = Date.now();
    buy.currentTime = 0;
    buy.play();
    game.isdmupg3bought = true;
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function getobjs() {
  if (game.dm >= 225) {
    if (game.clicks > game.maxobjm && objgain < 1) {
      game.maxobjm = game.clicks;
      get("maxobjm").html(decimal(game.maxobjm));
    }
    rebirth.currentTime = 0;
    rebirth.play();
    game.objs = add(game.objs, objgain);
    game.totalobjs = add(game.totalobjs,objgain);
    game.lastobj = Date.now();
    if (objgain == Infinity || isNaN(objgain)) game.objs = Infinity;
    game.objboost = game.objs / 10 + 1.01;
    game.clicks = -Infinity
    game.basecs = 0;
    game.mult = 0;
    game.cs = 0;
    game.upg1cost = 1;
    game.upg2cost = 2;
    game.upg3cost = 2;
    game.upg4cost = 4;
    game.upg5cost = 50;
    game.upg2base = 1.5;
    game.upg1bought = 1;
    game.upg2bought = 0;
    game.upg3bought = 0;
    game.upg4bought = 0;
    game.upg5bought = 0;
    game.antiupg1bought = 0;
    game.antiupg1cost = 27;
    game.antiupg2bought = 0;
    game.antiupg2cost = 76;
    if (game.subj < 9) game.dims = 1;
    game.dimcost = 12;
    game.dm = -Infinity;
    game.dmmult = 0;
    game.dmbuy1bought = 0;
    game.dmbuy1cost = log(5);
    game.dmbuy2bought = 0;
    game.dmbuy2cost = log(40);
    game.dmbuy3bought = 0;
    game.dmbuy3cost = 6;
    if (game.subj < 10) game.isdmupg3bought = false;
    game.chalfin = { total: 0, c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0 }
    get("mult").html(1);
    get("upg1cost").html("10");
    get("upg2cost").html("100");
    get("upg3cost").html("100");
    get("upg4cost").html("10,000");
    get("upg5cost").html("1e50");
    get("upg2base").html("1.5");
    get("antiupg1cost").html("1e27");
    get("antiupg2cost").html("1e76");
    get("dimcost").html("1e12");
    get("dims").html("1");
    get("dmbuy1cost").html("5");
    get("dmbuy2cost").html("40");
    get("dmbuy3cost").html("1,000,000");
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function buyobjbuy1() {
  if (game.objs >= game.objbuy1cost) {
    game.objs = subtract(game.objs, game.objbuy1cost);
    game.objboost = (game.objs >= 0 ? game.objs / 10 + 1.01 : game.objboost = 1);
    game.objbuy1bought++
    buy.currentTime = 0;
    buy.play();
    game.objbuy1cost += log(5);
    game.totalobjbuybought[1]++;
    game.lastobjbuybought[1] = Date.now();
    get("objbuy1cost").html(decimal(game.objbuy1cost));
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}
function gainamrp() {
  let req = (game.armp >= log(2.5) + 0.999 ? add(game.armp, 0) * 8 - 0.1835201 + 1 : amrpreq[round(raise10(game.armp))]);
  if (game.objs >= req) {
    buy.currentTime = 0;
    buy.play();
    while (game.objs >= req) {
      game.objs = subtract(game.objs, req);
      game.armp = add(game.armp, 0);
      game.amrp = add(game.amrp, game.armp);
      req = (game.armp >= log(2.5) + 0.999 ? add(game.armp, 0) * 8 - 0.1835201 + 1 : amrpreq[round(raise10(game.armp))]);
      game.objboost = (game.objs >= 0 ? game.objs / 10 + 1.01 : game.objboost = 1)
    }
    game.amrpboost = (game.amrp === -Infinity ? 1 : Math.sqrt(game.amrp / 7.5 + 1.002001))
  } else {
    reject.currentTime = 0;
    reject.play();
  }
}

function changemode() {
  game.theme = 1 - game.theme;
  get('theme').attr("href", ['dark', 'light'][game.theme] + ".css");
}
function changemusic(catagory, track) {
  if (game.musicidx === 0) {
    get("nomusic").prop("class","button")
  } else {
    $($(get("musictable").prop("children")[game.musictrack + 1]).prop("children")[game.musicidx - 1]).prop("children")[0].className = "button";
  }
  game.musicidx = catagory;
  game.musictrack = track;
  if (game.musicidx === 0) {
    music.pause();
    get("nomusic").prop("class","lifebutton")
  } else {
    music.src = "music/" + musicfiles[game.musicidx][game.musictrack];
    music.currentTime = 0;
    $($(get("musictable").prop("children")[game.musictrack + 1]).prop("children")[game.musicidx - 1]).prop("children")[0].className = "lifebutton";
    music.play();
  }
}
function clickjQuery(el) {
  el[0].click()
}
function openwiki() {
  clickjQuery($("<a href='https://incremental-universe-growth.fandom.com/wiki/Incremental_Universe_Growth_Wiki' target='_blank'></a>"))
}
function openserver() {
  if (confirm('Are you sure you want to do this?')){
    if (confirm('Are you REALLY sure you want to do this? You will be sent to a private messaging site.')){
      if (confirm('ARE YOU ACTUALLY 100% SURE YOU WANT TO DO THIS BECAUSE YOUR MOM WILL NOTICE AND GET MAD THIS IS YOUR LAST WARNING!')){
        alert('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'),
        clickjQuery($("<a href='https://discord.gg/hn6uj8Y7ww' target='_blank'></a>"));
      }
    }
  }
}
function fixdisplays() {
  $("#mult").html(decimal(game.mult));
  $("#upg1cost").html(decimal(game.upg1cost));
  $("#upg2cost").html(decimal(game.upg2cost));
  $("#upg3cost").html(decimal(game.upg3cost));
  $("#upg4cost").html(decimal(game.upg4cost));
  $("#upg5cost").html(decimal(game.upg5cost));
  $("#antiupg1cost").html(decimal(game.antiupg1cost));
  $("#antiupg2cost").html(decimal(game.antiupg2cost));
  $("#dimcost").html(decimal(game.dimcost));
  $("#dm").html(decimal(game.dm));
  $("#dmbuy1cost").html(decimal(game.dmbuy1cost));
  $("#dmbuy2cost").html(decimal(game.dmbuy2cost));
  $("#dmbuy3cost").html(decimal(game.dmbuy3cost));
  $("#maxobjm").html(decimal(game.maxobjm));
  $("#objbuy1cost").html(decimal(game.objbuy1cost));
}
$("#pl").change(e => {
  let h = e.target.value;
  if (h < 0) h = 0;
  if (h > 12) h = 12;
  e.target.value = round(h)
  game.place = round(h);
  fixdisplays();
})
$("#abbrbefore").change(e => {
  let h = e.target.value;
  if (h < 4) h = 4;
  if (h > 15) h = 15;
  e.target.value = round(h);
  game.start.before = round(h);
  fixdisplays();
})
$("#abbrafter").change(e => {
  let h = e.target.value;
  if (h < 4) h = 4;
  if (h > 15) h = 15;
  e.target.value = round(h);
  game.start.after = round(h);
  fixdisplays();
})
$("#XeY").change(e => {
  game.notate.XeY = e.target.checked;
  fixdisplays();
})
$("#XeYeZ").change(e => {
  game.notate.XeYeZ = e.target.checked;
  fixdisplays();
})
function gameloop(diff) {
  if (game.isupg1bought) { buyantiupg1(true); }
  if (game.isupg2bought) {
    for (var i = 0; i < 100; i++) {
      if (game.upg1bought > 25) {
        if (game.upg1cost < game.clicks - 2) { buymainupg1(true); }
      } else { buymainupg1(true); }
      if (game.upg3cost < game.clicks - 2) { buymainupg3(true); }
    }
  }
  if (game.isupg3bought) {
    if (game.upg2cost < game.clicks - 1 && game.upg2bought > 10) {
      buymainupg2(true);
    } else {
      buymainupg2(true);
    }
    buymainupg4(true);
    buymainupg5(true);
  }
  if (game.isupg4bought) {
    buyantiupg2(true);
    buydim(true);
  }
  if (game.clicks < 120) {
    game.dmgain = -Infinity;
    game.nextdm = 120;
  } else {
    game.dmgain = (Math.sqrt(game.clicks - 120) / 10) + game.dmmult;
    if (game.dmgain < 300) {
      game.dmgain = log(Math.floor(raise10(game.dmgain)));
    }
    if (game.chalfin.c7) {
      game.dmgain += add(game.objs, log(game.chalfin.c7))
    }
    game.nextdm = Math.pow(add(game.dmgain - game.dmmult, 0) * 10, 2) + 120;
    if (game.isupg5bought) {
      game.dm = add(game.dm, game.dmgain - log(1000 / diff));
      game.totaldm = add(game.totaldm, game.dmgain - log(1000 / diff));
      game.passivedm = add(game.passivedm, game.dmgain - log(1000 / diff));
    }
  }
  if (game.isdmupg3bought) {
    buydmbuy1(true);
    buydmbuy2(true);
  }
  if (game.dm < 225) {
    objgain = -Infinity;
    nextobj = 225;
  } else {
    objgain = ((game.dm - 227.5) * 0.4 + 1) * 0.01
    if (objgain < 300) {
      objgain = log(Math.floor(Math.pow(10, objgain)));
    }
    nextobj = (((add(objgain, 0) * 100) - 1) * 2.5) + 227.5
  }
  if (game.subj >= 1) {
    game.dm = add(game.dm, 1 - log(1000 / diff))
  }
  game.csab = game.clicks;
  game.cbb = game.clicks / Math.sqrt(game.dims) / game.dmboost * game.antieffect;
  game.cbb = add(game.cbb, game.cs - log(1000 / diff) + (add(game.dm, log(2)) * (game.isdmupg1bought * (game.isdmupg2bought + 1) * !(inchal()))) + (inchal(7) ? add(game.chalfin.total, 0) : 0));
  game.clicks = game.cbb * Math.sqrt(game.dims) * game.dmboost / game.antieffect;
  let c1mult = (log(2.5) + (game.chalfin.c1 * log(1.2))) * game.dmbuy2bought
  if (game.clicks < 6 + (c1mult * !(inchal(4) || inchal(7)))) {
    game.antieffect = 1;
  } else if (inchal(4) || inchal(7)) {
    game.antieffect = (Math.pow(game.clicks - 5, 1.25) - 1) / Math.pow(1.44, game.antiupg1bought) + 1;
  } else {
    game.antieffect = (Math.pow(((game.clicks + (100 - (6 + c1mult))) / 100), 1.95) - 1) / (Math.pow((game.subj >= 4 ? 1.8 : 1.44), game.antiupg1bought)) + 1
    if (game.clicks > (64 + c1mult)) {
      game.antieffect += Math.pow(game.clicks - (64 + c1mult), 1.2) / (320 * Math.pow(1.25, game.antiupg2bought));
    }
    if (game.clicks > (1000 + c1mult)) {
      game.antieffect += (Math.pow(game.clicks / 100, 0.75 + (game.clicks / 666.667 * 1.2)) - 5.62341325) / (10 * Math.pow(1.2, game.chalfin.c4));
    }
  }
  game.antieffect = game.antieffect ** (1 / game.amrpboost)
  game.chalboost = Math.pow(game.chalfin.total, 1.02) / 8 + 1;
  if (game.dm < 6) {
    game.dmboost = (Math.pow(Math.pow(Math.sqrt(10), game.dm) / 100, game.chalboost) * game.objboost) / (9 * (inchal(6) || inchal(7)) + 1);
  } else {
    game.dmboost = (Math.pow(Math.sqrt(game.dm - 6) / 2 + 1, game.chalboost) * game.objboost) / (9 * (inchal(6) || inchal(7)) + 1);
  }
  game.dmboost = game.dmboost * (1 + game.dmbuy3bought / 20) + 1;
  if(game.subj>=9){
    game.dims += Math.floor((Date.now()) / 1000) - Math.floor(game.lasttick / 1000);
    game.passivedims += Math.floor((Date.now()) / 1000) - Math.floor(game.lasttick / 1000);
  }
  if (isNaN(game.clicks)) {
    game.clicks = Infinity;
    game.cs = -Infinity;
  }
  if (isNaN(game.dims)) {
    game.dims = Infinity;
  }
  if (isNaN(game.dm)) {
    game.dm = Infinity;
  }
  if (isNaN(game.armp)) {
    game.armp = Infinity;
  }
  if (isNaN(game.dmgain)) {
    game.dmgain = Infinity;
  }
  if (isNaN(game.objs)) {
    game.objs = Infinity;
  }
  if (isNaN(objgain)) {
    objgain = Infinity;
  }
  subj();
  game.totalclicks = add(game.totalclicks, subtract(game.clicks, game.csab));
  game.csab = decimal(subtract(game.clicks, game.csab) + log(1000 / diff));
  if(game.clicks>game.maxclicks){
    game.maxclicks = game.clicks;
  }
  if(game.dims>game.maxdim){
    game.maxdim = game.dims;
  }
  if(game.dm>game.maxdm){
    game.maxdm = game.dm;
  }
  if(game.objs>game.maxobjs){
    game.maxobjs = game.objs;
  }
}
function manualreset() {
  var conf = confirm('Are you sure you want to reset? You\'ll lose all of your progress!')
  if (conf) {
    if (game.musicidx === 0) {
      get("nomusic").prop("class","button")
    } else {
      $($(get("musictable").prop("children")[game.musictrack + 1]).prop("children")[game.musicidx - 1]).prop("children")[0].className = "button";
    }
    reset();
    $.notify("Hard Reset Performed", "error")
  }
}
function renderloop(diff) {
  check();
  gameloop(diff);
  let objs = game.objs;
  let req = (game.armp >= log(2.5) + 0.999 ? add(game.armp, 0) * 8 - 0.1835201 + 1 : amrpreq[round(raise10(game.armp))]);
  let totalreq = -Infinity;
  let armp = game.armp;
  let amrp = -Infinity;
  let nextamrp;
  if (objs >= req) {
    while (objs >= req) {
      totalreq = add(totalreq, req)
      objs = subtract(objs, req);
      armp = add(armp, 0);
      amrp = add(amrp, armp);
      req = (armp >= log(2.5) + 0.999 ? add(armp, 0) * 8 - 0.1835201 + 1 : amrpreq[round(raise10(armp))]);
    }
    nextamrp = add(totalreq, req);
  } else {
    totalreq = add(totalreq, req);
    nextamrp = totalreq;
    armp = add(armp, 0);
    amrp = add(amrp, armp);
  }
  get("totalach").html(game.achievedata.length);
  get("clicks").html(decimal(game.clicks));
  get("csab").html(game.csab);
  get("dims").html(game.dims);
  get("dimcost").html(decimal(game.dimcost));
  get("dmgain").html(decimal(game.dmgain));
  get("nextdm").html(decimal(game.nextdm));
  get("objgain").html(decimal(objgain));
  get("nextobj").html(decimal(nextobj));
  get("dm").html(decimal(game.dm));
  get("dmboost").html(round(game.dmboost * 1000) / 1000);
  get("dm2mult").html(round(10 ** (game.place + log(2.5) + (game.chalfin.c1 * log(1.2)))) / 10 ** game.place);
  get("anti").html(round(game.antieffect * 1000) / 1000);
  get("progress").attr("value", game.clicks / 1e8);
  get("chalboost").html(round(game.chalboost * 1000) / 1000);
  get("objs").html(decimal(game.objs));
  get("objboost").html(round(game.objboost * 1000) / 1000);
  get("amrp").html(decimal(game.amrp));
  get("antiremovalobjtotal").html(decimal(totalreq));
  get("amrpgain").html(decimal(amrp));
  get("nextamrp").html(decimal(nextamrp));
  get("amrpboost").html(round(game.amrpboost * 1000) / 1000);
  stats();
  if (game.clicks >= 10 || game.dims > 1) {
    game.isdimunlocked = true;
  }
  if (game.clicks >= 118 || game.dm > -Infinity) {
    game.isdmunlocked = true;
  }
  if (game.dm >= 200 || game.objs > -Infinity) {
    game.isobjsunlocked = true;
  }
  if (game.dims == 1) {
    get("dims").hide();
  } else {
    get("dims").show();
  }
  if (game.clicks < 1.5) {
    get("upg2").hide();
    get("upg3").hide();
  } else {
    if (inchal(5) || inchal(7)) {
      get("upg2").hide();
    } else {
      get("upg2").show();
    }
    get("upg3").show();
  }
  if (game.clicks < 3.5 || inchal(5) || inchal(7)) {
    get("upg4").hide();
  } else {
    get("upg4").show();
  }
  if (game.clicks < 6 + (2 * game.dmbuy2bought * !(inchal(4) || inchal(7)))) {
    get("antitext").hide();
  } else {
    get("antitext").show();
  }
  if (!(game.isdimunlocked) || inchal(3) || inchal(7)) {
    get("dim").hide();
  } else {
    get("dim").show();
  }
  if (game.clicks < 26 || inchal(1) || inchal(7)) {
    get("antiupg1").hide();
  } else {
    get("antiupg1").show();
  }
  if (game.clicks < 49 || inchal(2) || inchal(5) || inchal(7)) {
    get("upg5").hide();
  } else {
    get("upg5").show();
  }
  if (game.clicks < 75 || inchal(1) || inchal(5) || inchal(7)) {
    get("antiupg2").hide();
  } else {
    get("antiupg2").show();
  }
  if (game.clicks < 54 || (game.isupg1bought && game.isupg2bought && game.isupg3bought && game.isupg4bought && game.isupg5bought && game.isupg6bought)) {
    get("upg").hide();
  } else {
    get("upg").show();
  }
  if (game.isupg1bought) {
    get("autoantiupg1").hide();
  } else {
    get("autoantiupg1").show();
  }
  if (game.clicks < 84 || game.isupg2bought) {
    get("automainupg1-3").hide();
  } else {
    get("automainupg1-3").show();
  }
  if (game.clicks < 126 || game.isupg3bought) {
    get("automain").hide();
  } else {
    get("automain").show();
  }
  if (game.clicks < 130 || game.isupg4bought) {
    get("autouptodm").hide();
  } else {
    get("autouptodm").show();
  }
  if (game.clicks < 175 || game.isupg6bought) {
    get("dimresetless").hide();
  } else {
    get("dimresetless").show();
  }
  if (!(game.isdmunlocked)) {
    get("dmupg").hide();
  } else {
    if (game.dm == -Infinity) {
      get("dmupg1").hide();
      get("dmbuy1").hide();
    } else {
      get("dmupg1").show();
      get("dmbuy1").show();
    }
    get("dmupg").show();
  }
  if (game.dm == -Infinity || game.isdmupg1bought) {
    get("dmupg1").hide();
    get("dmspace1").hide();
  } else {
    get("dmupg1").show();
    get("dmspace1").show();
  }
  if (game.dm < log(20) || game.isdmupg2bought) {
    get("dmupg2").hide();
    get("dmspace2").hide();
  } else {
    get("dmupg2").show();
    get("dmspace2").show();
  }
  if (game.dm < log(30)) {
    get("dmbuy2").hide();
    get("dmspace2").hide();
  } else {
    get("dmbuy2").show();
    if (!(game.isdmupg2bought)) {
      get("dmspace2").show();
    }
  }
  if (game.dm < log(6) + 6 || game.ischalunlocked) {
    get("unlockchal").hide();
    get("dmspace3").hide();
  } else {
    get("unlockchal").show();
    get("dmspace3").show();
  }
  if (game.dm < log(8) + 5) {
    get("dmbuy3").hide();
    get("dmspace3").hide();
  } else {
    get("dmbuy3").show();
    if (!(game.ischalunlocked)) {
      get("dmspace3").show();
    }
  }
  if (game.clicks < 140 || game.isupg5bought) {
    get("autodm").hide();
  } else {
    get("autodm").show();
  }
  if (game.dm < 95 || game.isdmupg3bought) {
    get("autodmbuy").hide();
  } else {
    get("autodmbuy").show();
  }
  if (game.dm < 9 || game.chalextend) {
    get("extendchal").hide();
  } else {
    get("extendchal").show();
  }
  if (game.ischalunlocked) {
    get("chalpage").show();
  } else {
    get("chalpage").hide();
  }
  if (game.chalextend) {
    get("dmchal2").show();
  } else {
    get("dmchal2").hide();
  }
  if (inchal()) {
    get("chalcomplete").show();
  } else {
    get("chalcomplete").hide();
  }
  if (!(game.isobjsunlocked)) {
    get("objupg").hide();
  } else {
    if (game.objs == -Infinity) {
      get("objbuy1").hide();
    } else {
      get("objbuy1").show();
    }
    get("objupg").show();
  }
  if (game.subj >= 4) {
    get("chal7").show();
  } else {
    get("chal7").hide();
  }
  if (game.subj >= 5) {
    get("antiremoval").show();
  } else {
    get("antiremoval").hide();
  }
  game.lasttick = Date.now();
  game.musicvol = get("musicslider").prop("value") / 100;
  game.sfx = get("sfxslider").prop("value") / 100;
  music.volume = game.musicvol;
  buy.volume = game.sfx;
  rebirth.volume = game.sfx;
  reject.volume = game.sfx;
  get("musicvolume").html(get("musicslider").prop("value"));
  get("sfxvolume").html(get("sfxslider").prop("value"));
  if (inchal()) {
    get("chalreq").html(decimal(chalreq[game.chal[0] - 1]));
    get("chal").html("in challenge " + game.chal[0] + "");
  } else {
    get("chal").html("not in any challenge");
  }
  if (game.musicidx) {
    get("song").show();
    get("song").html(musicnames[game.musicidx - 1][game.musictrack]);
    if (jtohmusic[game.musicidx - 1][game.musictrack]) {
      get("jtohsong").show();
      get("jtohsong").html(jtohmusic[game.musicidx - 1][game.musictrack]);
      get("jtoh").show();
      get("jtohbreak").show();
    } else {
      get("jtoh").hide();
      get("jtohsong").hide();
      get("jtohbreak").hide();
    }
  } else {
    get("song").hide();
    get("jtoh").hide();
    get("jtohsong").hide();
    get("jtohbreak").hide();
  }
  get("hotkeyson").html(["OFF","ON"][Number(game.hotkeys)]);
  localStorage.setItem("iugsave", btoa(JSON.stringify(game)));
}
setInterval(function(){
  renderloop(1000/60)
}, 1000/60)
