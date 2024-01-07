let log = x => Math.log10(x);
let floor = x => Math.floor(x);
let round = x => Math.round(x);
let raise10 = x => 10 ** x;
let get = id => $("#" + id);
Array.prototype.delete = function(idx) {
  this.splice(idx, 1);
}
Array.prototype.insert = function(idx, val) {
  this.splice(idx, 0, val);
}
function internal(a, b, mult) {
  return a + log(1 + mult * (raise10(b - a)));
}
function add(a, b) {
  if (a > b) {
    return internal(a, b, 1);
  } else {
    return internal(b, a, 1);
  }
}
function subtract(a, b) {
  if (a > b) {
    return internal(a, b, -1);
  } else {
    return -Infinity;
  }
}
function decimal(number) {
  if (number < game.start.before) {
    comma = [];
    for (i = 0; i < String(floor(raise10(number) + 0.001)).length; i++) {
      comma.push(String(floor(raise10(number) + 0.001))[i]);
    }
    for (i = String(floor(raise10(number) + 0.001)).length; i >= 0; i--) {
      if (i + 1 < comma.length && (String(floor(raise10(number) + 0.001)).length - i) % 3 == 1) {
        comma.insert(i + 1, ",");
      }
    }
    if (comma[0] == ",") {
      comma.delete(0);
    }
    result = "";
    for (i = 0; i < comma.length; i++) {
      result += comma[i];
    }
  } else if (number < raise10(game.start.after)) {
    result = (game.notate.XeY ? String(floor(((raise10(number - floor(number))) * raise10(game.place))) / raise10(game.place)) : '') + 'e' + String(floor(number));
  } else if (number < Infinity) {
    result = (game.notate.XeYeZ ? String(floor(((raise10(number - floor(number))) * raise10(game.place))) / raise10(game.place)) : '') + "e" + (game.notate.XeY ? String(floor(number / raise10(floor(log(number))) * raise10(game.place)) / raise10(game.place)) : '') + 'e' + String(floor(log(number)));
  } else {
    return "too much"
  }
  return result;
}
function switchpage(page) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.style.display = 'none';
  })
  document.getElementById(page).style.display = "";
  if (game.musicidx > 0) {
    music.play();
  }
  window.scrollTo(0, 0);
}
function subpage(name, page) {
  document.querySelectorAll('.' + name + 'subpage').forEach(function(p) {
    p.style.display = 'none';
  })
  document.getElementById(page).style.display = "";
  window.scrollTo(0, 0);
}