// Opening Ceremony
let opening = document.getElementById("start");

function OpeningCeremony(score, callBackFun) {
  setTimeout(() => {
    opening.innerText = "Step 1 : Let the games begin";
    console.log("Let the games begin");
    Race100M(score, callBackFun);
  }, 1000);
}

// Race 100 M
let race = document.getElementById("raceStart");
let sorted_time = document.getElementById("sort-time");
let race_result = document.getElementById("race-result");
let random_tym = document.getElementById("random-time");

function Race100M(score, callBackFun) {
  race.innerHTML = "Step 2 : Start 100 M Race";
  const random_time = {
    red: Math.floor(Math.random() * 6 + 10),
    yellow: Math.floor(Math.random() * 6 + 10),
    blue: Math.floor(Math.random() * 6 + 10),
    green: Math.floor(Math.random() * 6 + 10),
  };
  random_tym.innerText = ` Random Time : Red: ${random_time.red} , Blue: ${random_time.blue} , Green: ${random_time.green} , Yellow: ${random_time.yellow}`;
  console.log(
    "Random Time : ",
    random_time.red,
    random_time.green,
    random_time.yellow,
    random_time.blue
  );

  // sort random time
  const sort_time = Object.keys(random_time).sort(
    (a, b) => random_time[a] - random_time[b]
  );
  sorted_time.innerText = `sorted time : ${sort_time[0]} , ${sort_time[1]} , ${sort_time[2]} , ${sort_time[3]}`;
  console.log("sorted time :", sort_time);

  // add points in first and second element of sorted time
  score[sort_time[0]] += 50;
  score[sort_time[1]] += 25;

  race_result.innerText = `Race results : Red: ${score.red} , Blue: ${score.blue} , Yellow: ${score.yellow} , Green: ${score.green}`;
  console.log("Race results : ", score);
  console.log("");

  setTimeout(() => {
    longJump(score, callBackFun);
  }, 3000);
}

// Long Jump
let longjump = document.getElementById("startLongJump");
let longjump_winner = document.getElementById("longjump-winner");

function longJump(score, callBackFun) {
  longjump.innerHTML = `Step 3 : Start Long Jump`;
  console.log("Starting Long Jump");
  const colors = ["red", "yellow", "blue", "green"];

  // choosing a random winner
  const Random_winner = colors[Math.floor(Math.random() * 4)];
  longjump_winner.innerHTML = `Long Jump winner: ${Random_winner}`;
  console.log("Long Jump winner:", Random_winner);

  // adding point to that random winner
  score[Random_winner] += 150;
  longjump_result.innerHTML = `Long Jump results : Red : ${score.red}, Green : ${score.green}, Blue : ${score.blue}, Yellow : ${score.yellow}`;
  console.log("Long Jump results:", score);
  console.log("");

  setTimeout(() => {
    HighJump(score, callBackFun);
  }, 2000);
}

// High Jump
let highjump = document.getElementById("startHighJump");
let event_cancel = document.getElementById("event-cancel");
let highjump_winner = document.getElementById("highjump-winner");
let highjump_results = document.getElementById("highjump-results");

function HighJump(score, callBackFun) {
  highjump.innerHTML = `Step 4 : Start High Jump`;
  console.log("Starting High Jump");
  const result = prompt(
    "Enter Any of the color mentioned here : (red, yellow, blue, green)"
  );

  // checking if prompt is empty then console cancellled
  if (result === null || result === "") {
    event_cancel.innerHTML = `Event was cancelled`;
    console.log("Event was cancelled");
  }
  // checking if user gives correct input then add 100 points to that color
  else {
    const color = result.toLowerCase();
    if (score.hasOwnProperty(color)) {
      score[color] += 100;

      highjump_winner.innerHTML = `High Jump winner: ${color}`;
      console.log(`High Jump winner: ${color}`);
      highjump_results.innerHTML = `High Jump results: Red : ${score.red}, Green : ${score.green}, Blue : ${score.blue}, Yellow : ${score.yellow}`;
      console.log("High Jump results:", score);
    } else {
      event_cancel.innerHTML = `Event was cancelled`;
      console.log("Event was cancelled");
    }
  }
  console.log("");
  AwardCeremony(score, callBackFun);
}

// Award Ceremony
let award = document.getElementById("startAwardCeremony");
let final = document.getElementById("final");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let forth = document.getElementById("forth");

function AwardCeremony(score) {
  award.innerHTML = `Step 4 : Start Award Ceremony`;
  final.innerHTML = `Final results: Red : ${score.red}, Green : ${score.green}, Blue : ${score.blue}, Yellow : ${score.yellow}`;
  console.log("Final results:", score);
  const sorted_score = Object.keys(score).sort((a, b) => score[b] - score[a]);

  first.innerHTML = `${sorted_score[0].toUpperCase()} came first with ${
    score[sorted_score[0]]
  } points.`;
  console.log(
    `${sorted_score[0].toUpperCase()} came first with ${
      score[sorted_score[0]]
    } points.`
  );
  second.innerHTML = `${sorted_score[1].toUpperCase()} came second with ${
    score[sorted_score[1]]
  } points.`;
  console.log(
    `${sorted_score[1].toUpperCase()} came second with ${
      score[sorted_score[1]]
    } points. `
  );
  third.innerHTML = `${sorted_score[2].toUpperCase()} came third with ${
    score[sorted_score[2]]
  } points.`;
  console.log(
    `${sorted_score[2].toUpperCase()} came third with ${
      score[sorted_score[2]]
    } points.`
  );
  forth.innerHTML = `${sorted_score[3].toUpperCase()} came forth with ${
    score[sorted_score[3]]
  } points.`;
  console.log(
    `${sorted_score[3].toUpperCase()} came forth with ${
      score[sorted_score[3]]
    } points.`
  );
}

const score = { red: 0, yellow: 0, blue: 0, green: 0 };

OpeningCeremony(score, longJump);
