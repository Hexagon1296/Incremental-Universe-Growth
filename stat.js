function datetime(milli){
  let milliDate = new Date(milli);
  let year,month,date,day,hour,min;
  year = milliDate.getFullYear();
  month = milliDate.getMonth();
  date = milliDate.getDate();
  day = milliDate.getDay();
  hour = milliDate.getHours();
  min = milliDate.getMinutes();
  let res = "";
  res += ["Sun","Mon","Tues","Wends","Thurs","Fri","Sat"][day];
  res += ", ";
  res += ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][month];
  res += " ";
  res += date;
  res += ", "
  res += year;
  res += " ";
  res += (hour-1)%12+1;
  res += ":";
  res += (min<10?"0"+min:min);
  res += " ";
  res += (hour>=12?"PM":"AM");
  return res;
}
function timebetween(then,now){
  let thenDate1 = new Date(then);
  let thenYear,thenMonth,thenDate,thenHour,thenMin,thenSec;
  thenYear = thenDate1.getFullYear();
  thenMonth = thenDate1.getMonth();
  thenDate = thenDate1.getDate();
  thenHour = thenDate1.getHours();
  thenMin = thenDate1.getMinutes();
  thenSec = thenDate1.getSeconds();
  thenMilli = thenDate1.getMilliseconds();
  let nowDate1 = new Date(now);
  let nowYear,nowMonth,nowDate,nowHour,nowMin,nowSec;
  nowYear = nowDate1.getFullYear();
  nowMonth = nowDate1.getMonth();
  nowDate = nowDate1.getDate();
  nowHour = nowDate1.getHours();
  nowMin = nowDate1.getMinutes();
  nowSec = nowDate1.getSeconds();
  nowMilli = nowDate1.getMilliseconds();
  let diffYear = nowYear-thenYear;
  let diffMonth = nowMonth-thenMonth;
  if (diffMonth<0){
    diffMonth += 12;
    diffYear--;
  }
  let diffDate = nowDate-thenDate;
  if (diffDate<0){
    diffDate += [31,28+(((nowYear%4==0)&&(nowYear%100!=0))||(nowYear%400==0)),31,30,31,30,31,31,30,31,30,31][(nowMonth-1)%12];
    diffMonth--;
    if (diffMonth<0){
      diffMonth += 12;
      diffYear--;
    }
  }
  let diffHour = nowHour-thenHour;
  if (diffHour<0){
    diffHour += 24;
    diffDate--;
    if (diffDate<0){
      diffDate += [31,28+(((nowYear%4==0)&&(nowYear%100!=0))||(nowYear%400==0)),31,30,31,30,31,31,30,31,30,31][(nowMonth-1)%12];
      diffMonth--;
      if (diffMonth<0){
        diffMonth += 12;
        diffYear--;
      }
    }
  }
  let diffMin = nowMin-thenMin
  if(diffMin<0){;
    diffMin += 60
    diffHour--;
    if (diffHour<0){
      diffHour += 24;
      diffDate--;
      if (diffDate<0){
        diffDate += [31,28+(((nowYear%4==0)&&(nowYear%100!=0))||(nowYear%400==0)),31,30,31,30,31,31,30,31,30,31][(nowMonth-1)%12];
        diffMonth--;
        if (diffMonth<0){
          diffMonth += 12;
          diffYear--;
        }
      }
    }
  }
  let diffSec = nowSec-thenSec
  if(diffSec<0){
    diffSec += 60;
    diffMin--;
    if(diffMin<0){;
      diffMin += 60
      diffHour--;
      if (diffHour<0){
        diffHour += 24;
        diffDate--;
        if (diffDate<0){
          diffDate += [31,28+(((nowYear%4==0)&&(nowYear%100!=0))||(nowYear%400==0)),31,30,31,30,31,31,30,31,30,31][(nowMonth-1)%12];
          diffMonth--;
          if (diffMonth<0){
            diffMonth += 12;
            diffYear--;
          }
        }
      }
    }
  }
  let diffMilli = nowMilli-thenMilli;
  if(diffMilli<0){
    diffMilli += 1000;
    diffSec--;
    if(diffSec<0){
      diffSec += 60;
      diffMin--;
      if(diffMin<0){;
        diffMin += 60
        diffHour--;
        if (diffHour<0){
          diffHour += 24;
          diffDate--;
          if (diffDate<0){
            diffDate += [31,28+(((nowYear%4==0)&&(nowYear%100!=0))||(nowYear%400==0)),31,30,31,30,31,31,30,31,30,31][(nowMonth-1)%12];
            diffMonth--;
            if (diffMonth<0){
              diffMonth += 12;
              diffYear--;
            }
          }
        }
      }
    }
  }
  let diff = [diffYear,diffMonth,diffDate,diffHour,diffMin,diffSec]
  let start = 0;
  while(diff[start]==0){
    start++;
  }
  if(start>3){start=3;}
  diff = diff.slice(start,start+3);
  let res = "";
  for(let i=0;i<diff.length;i++){
    if(diff[i]==0&&!(i==2&&res=="")){continue;}
    if(res>""){res+=", "}
    res+=diff[i];
    res+=" ";
    res+=["year","month","day","hour","minute","second"][i+start];
    res+=(diff[i]==1?"":"s");
  }
  return res;
}
let versions = [
  "v0.1.6.2 or earlier",
  "v0.1.6.3 or v0.1.6.4",
  "v0.1.6.5",
  "v0.1.6.6",
  "v0.1.7.0 - v0.1.7.2",
  "v0.1.8.0 - v0.1.8.4",
  "v0.1.8.5 test build",
  "Unused",
  "v0.1.8.5 - v0.2.2.1",
  "v0.2.2.2 or v0.2.2.3",
  "v0.2.2.4 - v0.2.2.6",
  "v0.2.2.7 test build - v0.2.2.9",
  "v0.2.2.10",
  "v0.2.3 - v0.2.4.1",
  "v0.2.4.2 test build 1",
  "v0.2.4.2 test build 2",
  "v0.2.4.2",
  "v0.2.4.3",
  "v0.2.4.4",
  "v0.2.4.5 or v0.2.4.6",
  "v0.2.4.7",
  "v0.2.4.8",
  "v0.2.4.9 or v0.2.4.10",
  "v0.2.4.11 test build 1",
  "v0.2.4.11 test build 2",
  "v0.2.4.11 test build 3",
  "v0.2.4.11 or later"
]
function stats(){
  get("totalclicks").html(decimal(game.totalclicks));
  get("maxclicks").html(decimal(game.maxclicks));
  get("startplaying").html(datetime(game.startplaying));
  get("timeplaying").html(timebetween(game.startplaying,Date.now()));
  get("versionstarted").html(versions[game.versionstarted-1]);
  get("internalversion").html(game.versionstarted);
  for(let i in game.totalbought){
    if(game.totalbought[i]<1+(i==1)){
      get("hasupg"+i+"bought").show();
      get("upg"+i+"stats").hide();
    }else{
      get("upg"+i+"stats").show();
      get("totalupg"+i+"bought").html(game.totalbought[i]-(i==1));
      if(game.lastbought[i]==1652572800000){
        get("lastupg"+i+"bought").html("sometime");
      }else{
        get("lastupg"+i+"bought").html(timebetween(game.lastbought[i],Date.now())+" ago");
      }
    }
  }
  if (game.clicks >= 1.5 || game.totalbought[2]>0) {
    get("upg2bought").show();
  } else {
    get("upg2bought").hide();
  }
  if (game.clicks >= 1.5 || game.totalbought[3]>0) {
    get("upg3bought").show();
  } else {
    get("upg3bought").hide();
  }
  if (game.clicks >= 3.5 || game.totalbought[4]>0) {
    get("upg4bought").show();
  } else {
    get("upg4bought").hide();
  }
  if (game.clicks >= 49 || game.totalbought[5]>0) {
    get("upg5bought").show();
  } else {
    get("upg5bought").hide();
  }
  get("totaldim").html(game.totaldim);
  get("maxdim").html(game.maxdim);
  if(game.totaldim<2){
    get("hasdimbought").html("have never")
    get("lastdimbought").hide();
  }else{
    get("hasdimbought").html("last")
    get("lastdimbought").show();
    if(game.lastdim==1652572800000){
      get("lastdimbought").html(" sometime");
    }else{
      get("lastdimbought").html(" "+timebetween(game.lastdim,Date.now())+" ago");
    }
  }
  for(let i in game.totalantibought){
    if(game.totalantibought[i]<1){
      get("hasantiupg"+i+"bought").show();
      get("antiupg"+i+"stats").hide();
    }else{
      get("antiupg"+i+"stats").show();
      get("totalantiupg"+i+"bought").html(game.totalantibought[i]);
      if(game.lastantibought[i]==1652572800000){
        get("lastantiupg"+i+"bought").html("sometime");
      }else{
        get("lastantiupg"+i+"bought").html(timebetween(game.lastantibought[i],Date.now())+" ago");
      }
    }
  }
  if(game.subj<9){
    get("passivedim").hide();
  }else{
    get("passivedim").show();
  }
  if (game.clicks >= 26 || game.totalantibought[1]>0) {
    get("antiupg1bought").show();
  } else {
    get("antiupg1bought").hide();
  }
  if (game.clicks >= 75 || game.totalantibought[2]>0) {
    get("antiupg2bought").show();
  } else {
    get("antiupg2bought").hide();
  }
  for(let i in game.autobought){
    if(game["isupg"+i+"bought"]){
      if(game.autobought[i]==1652572800000){
        get("whenautoupg"+i+"bought").html("sometime");
      }else{
        get("whenautoupg"+i+"bought").html(timebetween(game.autobought[i],Date.now())+" ago");
      }
      get("hasautoupg"+i+"bought").hide();
    }else{
      get("hasautoupg"+i+"bought").show();
      get("whenautoupg"+i+"bought").html("yet");
    }
  }
  if(game.clicks >= 54 || (game.isupg1bought||game.isupg2bought||game.isupg3bought||game.isupg4bought||game.isupg5bought||game.isupg6bought)){
    get("autostatbutton").show();
  }else{
    get("autostatbutton").hide();
  }
  if(game.clicks >= 54 || game.isupg1bought){
    get("autoupg1bought").show();
  }else{
    get("autoupg1bought").hide();
  }
  if(game.clicks >= 84 || game.isupg2bought){
    get("autoupg2bought").show();
  }else{
    get("autoupg2bought").hide();
  }
  if(game.clicks >= 126 || game.isupg3bought){
    get("autoupg3bought").show();
  }else{
    get("autoupg3bought").hide();
  }
  if(game.clicks >= 130 || game.isupg4bought){
    get("autoupg4bought").show();
  }else{
    get("autoupg4bought").hide();
  }
  if(game.clicks >= 140 || game.isupg5bought){
    get("autoupg5bought").show();
  }else{
    get("autoupg5bought").hide();
  }
  if(game.clicks >= 175 || game.isupg6bought){
    get("autoupg6bought").show();
  }else{
    get("autoupg6bought").hide();
  }
  get("totaldm").html(decimal(game.totaldm));
  get("maxdm").html(decimal(game.maxdm));
  if(game.totaldm<0){
    get("hasdmbought").html("have never")
    get("lastdm").hide();
  }else{
    get("hasdmbought").html("last")
    get("lastdm").show();
    if(game.lastdm==1652572800000){
      get("lastdm").html(" sometime");
    }else{
      get("lastdm").html(" "+timebetween(game.lastdm,Date.now())+" ago");
    }
  }
  for(let i in game.totaldmbuybought){
    if(game.totaldmbuybought[i]<1){
      get("hasdmbuy"+i+"bought").show();
      get("dmbuy"+i+"stats").hide();
    }else{
      get("dmbuy"+i+"stats").show();
      get("totaldmbuy"+i+"bought").html(game.totaldmbuybought[i]);
      if(game.lastdmbuybought[i]==1652572800000){
        get("lastdmbuy"+i+"bought").html(" sometime");
      }else{
        get("lastdmbuy"+i+"bought").html(timebetween(game.lastdmbuybought[i],Date.now())+" ago");
      }
    }
  }
  for(let i in game.hasdmupgbought){
    if(game.hasdmupgbought[i]){
      if(game.lastdmupgbought[i]==1652572800000){
        get("lastdmupg"+i+"bought").html(" sometime");
      }else{
        get("lastdmupg"+i+"bought").html(" "+timebetween(game.lastdmupgbought[i],Date.now())+" ago");
      }
      get("hasdmupg"+i+"bought").html("last");
    }else{
      get("hasdmupg"+i+"bought").html("have never");
      get("lastdmupg"+i+"bought").html("");
    }
  }
  if(game.isdmunlocked){
    get("dmstatbutton").show();

  }else{
    get("dmstatbutton").hide();
  }
  if(game.dm>=0||game.hasdmupgbought[1]){
    get("dmupg1bought").show();
  }else{
    get("dmupg1bought").hide();
  }
  if(game.dm>=0||game.totaldmbuybought[1]>0){
    get("dmbuy1bought").show();
  }else{
    get("dmbuy1bought").hide();
  }
  if(game.dm>=log(20)||game.hasdmupgbought[2]){
    get("dmupg2bought").show();
  }else{
    get("dmupg2bought").hide();
  }
  if(game.dm>=log(30)||game.totaldmbuybought[2]>0){
    get("dmbuy2bought").show();
  }else{
    get("dmbuy2bought").hide();
  }
  if((game.dm>=(log(8)+5))||game.totaldmbuybought[3]>0){
    get("dmbuy3bought").show();
  }else{
    get("dmbuy3bought").hide();
  }
  if(game.dm>=95||game.hasdmupgbought[3]){
    get("dmupg3bought").show();
  }else{
    get("dmupg3bought").hide();
  }
  if(game.ischalbought){
    if(game.chalbought.norm==1652572800000){
      get("whenchalbought").html("sometime");
    }else{
      get("whenchalbought").html(timebetween(game.chalbought.norm,Date.now())+" ago");
    }
    get("haschalbought").hide();
  }else{
    get("haschalbought").show();
    get("whenchalbought").html("yet");
  }
  if(game.chalextend){
    if(game.chalbought.ext==1652572800000){
      get("whenchalextend").html("sometime");
    }else{
      get("whenchalextend").html(timebetween(game.chalbought.ext,Date.now())+" ago");
    }
    get("haschalextend").hide();
  }else{
    get("haschalextend").show();
    get("whenchalextend").html("yet");
  }
  get("grandchal").html(game.totalchal);
  if(game.totalchal<1){
    get("totalchalbeat").hide();
  }else{
    get("totalchalbeat").show();
    if(game.lastchal==1652572800000){
      get("lastchal").html("sometime");
    }else{
      get("lastchal").html(timebetween(game.lastchal,Date.now())+" ago");
    }
  }
  for(let i in game.totalchalcomp){
    get("chal"+i+"total").html(game.totalchalcomp[i]);
    if(game.totalchalcomp[i]<1){
      get("chal"+i+"beat").hide();
    }else{
      get("chal"+i+"beat").show();
      if(game.lastchalcomp[i]==1652572800000){
        get("lastchal"+i+"beat").html("sometime");
      }else{
        get("lastchal"+i+"beat").html(timebetween(game.lastchalcomp[i],Date.now())+" ago");
      }
    }
  }
  if(game.dm>=log(6)+6||game.ischalunlocked){
    get("chalstats").show();
  }else{
    get("chalstats").hide();
  }
  if(game.dm>=9||game.chalextend){
    get("chalextend").show();
  }else{
    get("chalextend").hide();
  }
  if(game.ischalunlocked){
    get("chalcomp").show();
  }else{
    get("chalcomp").hide();
  }
  if(game.chalextend){
    get("extendchalcomp").show();
  }else{
    get("extendchalcomp").hide();
  }
  if(game.subj>=4){
    get("chal7stat").show();
  }else{
    get("chal7stat").hide();
  }
}
