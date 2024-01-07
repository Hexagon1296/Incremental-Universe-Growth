var achieve = [
  {
    name: 'Main Upgrades',
    unlocktext: 'Unlocked',
    require: () => true,
    achievements: [
      'You gotta start somewhere',
      'Multiplicative',
      'Inflation is for noobs',
      'But upgrade two is already OP!',
      'I like upgrade two too much',
      'Linear Growth Enthusiast',
      'I like upgrade two WAY too much',
      'Wait a minute, isn\'t inflation good here?',
      'I LOVE UPGRADE TWO',
      'softcaps are cap'
    ],
    tooltips: [
      'Buy the first upgrade',
      'Buy the second upgrade',
      'Buy the third upgrade',
      'Buy the fourth upgrade',
      'Buy the fifth upgrade',
      'Buy upgrade one 2,500 times',
      'Buy upgrade two fifty times',
      'Buy upgrade three 2,500 times',
      'Buy upgrade four 150 times',
      'Buy antimatter upgrade one 450 times'
    ],
    requires: [
      () => game.upg1bought >= 2,
      () => game.upg2bought >= 1,
      () => game.upg3bought >= 1,
      () => game.upg4bought >= 1,
      () => game.upg5bought >= 1,
      () => game.upg1bought >= 2501,
      () => game.upg2bought >= 50,
      () => game.upg3bought >= 2000,
      () => game.upg4bought >= 150,
      () => game.antiupg1bought >= 450
    ]
  },
  {
    name: 'Universe Size',
    unlocktext: 'Get to 1,000 meters',
    require: () => game.clicks >= 3,
    achievements: [
      'A kilometer of amazeness',
      'Oh no! A softcap! We\'re all going to die!',
      'We can get to the sun now',
      'Just like my universe!',
      'Antimatter Round Two: Fight',
      'You should Googol the size of this',
      'Why can\'t my game go past this?',
      'First one in this row, except...',
      'dude that\'s alot of zeroes',
      'E: The Sequel'
    ],
    tooltips: [
      'Get to 1,000 meters',
      'Get to 1,000,000 meters',
      'Get to 1.48e11 meters',
      'Get to 8.79e26 meters',
      'Get to 1e64 meters',
      'Get to 1e100 meters',
      'Get to 1.79e308 meters',
      'Get to 1e1000 meters',
      'Get to 1e10000 meters',
      'Get to 1e1e6 meters'
    ],
    requires: [
      () => game.clicks >= 3,
      () => game.clicks >= 6,
      () => game.clicks >= 11.1749254,
      () => game.clicks >= 26.9443983,
      () => game.clicks >= 64,
      () => game.clicks >= 100,
      () => game.clicks >= 308.254716,
      () => game.clicks >= 1000,
      () => game.clicks >= 10000,
      () => game.clicks >= 1000000
    ]
  },
  {
    name: 'Dimensions',
    unlocktext: 'Get a dimension',
    require: () => game.dims >= 2,
    achievements: [
      'I\'ve been Squared!',
      'You are here',
      'Tesseractal',
      'That\'s a few dimensions',
      'Is this a luck achievement?',
      'What do you mean you couldn\'t afford nine?',
      'Double Digit Dimensions',
      'What is the 0th letter of the alphabet?',
      'Demensions are getting nicer',
      'ONE HUNDRED DIMENSIONS'
    ],
    tooltips: [
      'Get a dimension',
      'Get another dimension',
      'Get to dimension four',
      'Get to dimension six',
      'Get to dimension seven',
      'Get to dimension nine',
      'Get to dimension ten',
      'Get to dimension 26',
      'Get to dimension 69',
      'Get to dimension 100'
    ],
    requires: [
      () => game.dims >= 2,
      () => game.dims >= 3,
      () => game.dims >= 4,
      () => game.dims >= 6,
      () => game.dims >= 7,
      () => game.dims >= 9,
      () => game.dims >= 10,
      () => game.dims >= 26,
      () => game.dims >= 69,
      () => game.dims >= 100
    ]
  },
  {
    name: 'Dark Matter',
    unlocktext: 'Get dark matter',
    require: () => game.dm >= 0,
    achievements: [
      'An unsolved mystery',
      'Actually, this stuff is pretty cool',
      'Speed go brrrrrrrrrrrr',
      'polygon with 4 sides',
      'See you later, Antimatter!',
      'antimatter: the sequel',
      'Dark Dimensions?',
      '9 + 10 = dark matter',
      'Nice dark matter',
      'Dark Matter²'
    ],
    tooltips: [
      'Get dark matter',
      'Get 2 dark matter',
      'Buy dark matter buyable one',
      'Buy dark matter upgrade two',
      'Buy dark matter buyable two',
      'Get 1,000,000 dark matter',
      'Get 1e12 dark matter',
      'Get 1e21 dark matter',
      'Get 1e69 dark matter',
      'Get 1e120 dark matter'
    ],
    requires: [
      () => game.dm >= 0,
      () => game.dm >= 0.301029995663,
      () => game.dmbuy1bought >= 1,
      () => game.isdmupg2bought,
      () => game.dmbuy2bought >= 1,
      () => game.dm >= 6,
      () => game.dm >= 12,
      () => game.dm >= 21,
      () => game.dm >= 69,
      () => game.dm >= 120
    ]
  },
  {
    name: 'Challenges',
    unlocktext: 'Unlock challenges',
    require: () => game.ischalunlocked,
    achievements: [
      'Timewalls?',
      'Worth it',
      'BUT I LIKED UPGRADE TWO SO MUCH D:',
      'hmm... yes, this dark matter is dark',
      'Antimatter shouldn\'t exist',
      'Boring challenge',
      'No! My power! It\'s been taken!',
      'MATTER',
      'The Challenging Day',
      'Impossible, or is it?'
    ],
    tooltips: [
      'Unlock Challenges',
      'Complete challenge one',
      'Complete challenge two',
      'Complete challenge three',
      'Complete challenge four',
      'Complete challenge five',
      'Complete challenge six',
      'Break challenge 1',
      'Complete 24 challenges in total',
      'Get to 1e100 meters in challenge four'
    ],
    requires: [
      () => game.ischalunlocked,
      () => game.chalfin.c1 >= 1,
      () => game.chalfin.c2 >= 1,
      () => game.chalfin.c3 >= 1,
      () => game.chalfin.c4 >= 1,
      () => game.chalfin.c5 >= 1,
      () => game.chalfin.c6 >= 1,
      () => game.chalfin.c1 >= 25,
      () => game.chalfin.total >= 24,
      () => game.clicks >= 100 && inchal(4)
    ]
  },
  {
    name: 'Objects',
    unlocktext: 'Get an object',
    require: () => game.objs >= 0,
    achievements: [
      'I\'m not alone anymore!',
      'Isn\'t this the upgrade five for upgrade four?'
    ],
    tooltips: [
      'Get an object',
      'Buy object buyable one'
    ],
    requires: [
      () => game.objs >= 0,
      () => game.objbuy1bought >= 1
    ]
  },
  {
    name: 'Subjective Milestones',
    unlocktext: 'Get a subjective milestone',
    require: () => game.subj >= 1,
    achievements: [
      'I\'m gaining dark matter all the time!',
      'Impossible justice',
      'W H Y dark matter',
      'These challenges aren\'t factors',
      'Crazy!',
      'Universe Expander Reloaded Confirmed!',
      'Bigger universe = more fun',
      'Objects sells Chλllenges now!',
      'I Assure You It\'s Quite Subjective',
      'All Your Subjective Are Belong To Us'
    ],
    tooltips: [
      'Complete a Subjective Milestone',
      'Complete two Subjective Milestones',
      'Complete three Subjective Milestones',
      'Complete four Subjective Milestones',
      'Complete five Subjective Milestones',
      'Complete six Subjective Milestones',
      'Complete seven Subjective Milestones',
      'Complete eight Subjective Milestones',
      'Complete nine Subjective Milestones',
      'Complete ten Subjective Milestones'
    ],
    requires: [
      () => game.subj >= 1,
      () => game.subj >= 2,
      () => game.subj >= 3,
      () => game.subj >= 4,
      () => game.subj >= 5,
      () => game.subj >= 6,
      () => game.subj >= 7,
      () => game.subj >= 8,
      () => game.subj >= 9,
      () => game.subj >= 10
    ]
  },
  {
    name: 'Antimatter Removal Tool',
    unlocktext: 'Get an AMRP',
    require: () => game.amrp >= 0,
    achievements: [
      "This achievement was eaten by an evil particle of antimatter"
    ],
    tooltips: [
      "Get an AMRP"
    ],
    requires: [
      () => game.amrp >= 0
    ]
  }
];

function settext() {
  for (var i = 0; i < achieve.length; i++) {
    var row = achieve[i];
    for (var j = 0; j < row.achievements.length; j++) {
      $($(get("achievetable").prop("children")[i]).prop("children")[j]).html(row.achievements[j]);
      $($(get("achievetable").prop("children")[i]).prop("children")[j]).attr('tooltip', row.tooltips[j]);
    }
  }
}

settext()

function setcolors() {
  if (game.rowunlocked.length < achieve.length) {
    get("achieverownext").html(achieve[game.rowunlocked.length].unlocktext);
  } else {
    get("achieverownext").html("You've unlocked every row! There's now way ");
  }
  for (var i = 0; i < achieve.length; i++) {
    row = achieve[i];
    if (game.rowunlocked.includes(i)) {
      $(get("achievetable").prop("children")[i]).show();
      for (var j = 0; j < row.achievements.length; j++) {
        var achieveid = i * 10 + j;
        $(get("achievetable").prop("children")[i]).prop("children")[j].style.backgroundColor = game.achievedata.includes(achieveid) ? '#0A4' : '#555';
      }
    } else {
      $(get("achievetable").prop("children")[i]).hide();
    }
  }
  get("totalach").html(game.achievedata.length)
}

function check() {
  var changed = false
  for (var i = 0; i < achieve.length; i++) {
    row = achieve[i];
    if (!game.rowunlocked.includes(i) && row.require()) {
      game.rowunlocked.push(i);
      $.notify('Achievement Row Unlocked: ' + row.name, 'achieve');
      changed = true;
    }
    if (game.rowunlocked.includes(i)) {
      for (var j = 0; j < row.achievements.length; j++) {
        var achieveid = i * 10 + j;
        if (!game.achievedata.includes(achieveid) && row.requires[j]()) {
          game.achievedata.push(achieveid);
          $.notify('Achievement: ' + row.achievements[j], 'achieve');
          changed = true;
        }
      }
    }
  }
  if (changed) {
    setcolors();
  }
}