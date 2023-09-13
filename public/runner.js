
let enabled = false;
// .scoreboard_contestantLabel
console.log('runner.js');

function onExtensionEnabledChange(enabledValue) {
    enabled = enabledValue;
}

function getAllCurrentMatch(){
    let currentMatch = [];
    let currentMatchNode = document.querySelectorAll(".is-live.cardEvent")
    currentMatchNode.forEach(match => {
        let matchEquip = match.querySelectorAll(".scoreboard_contestantLabel");
        let matchScore = match.querySelectorAll(".scoreboard_score");
        let matchTime = match.querySelector(".event_infoTime .ng-star-inserted").innerText;
        matchTime = matchTime.split("'")[0];
        if(matchTime.includes("+")){
            let time = matchTime.split("+");
            matchTime = parseInt(time[0]) + parseInt(time[1]);
        } else {
            matchTime = parseInt(matchTime);
        }


        currentMatch.push({
            "equip1": matchEquip[0].innerText,
            "equip2": matchEquip[1].innerText,
            "score1": matchScore[0].innerText,
            "score2": matchScore[1].innerText,
            "time": matchTime
        })
    });
    return currentMatch;
}