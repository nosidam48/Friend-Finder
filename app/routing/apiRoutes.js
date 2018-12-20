const fs = require('fs');
const arb = require("../data/friends.js")

let friends = function (req, res) {
    
    res.json(arb)
}

let friendsPost = function (req, res) {
    const newFriend = req.body;
    let scoreArr = [];
    let matchObj = {
        name: "",
        image: ""
    }
    
    let newScores = req.body.scores;
    
   

    for (i in arb) {
        let scoreDiff = 0;
        let oldScore = arb[i].scores
        for (i = 0; i < newScores.length; i++) {
          scoreDiff += Math.abs(parseInt(newScores[i]) - parseInt(oldScore[i]))   
        }
        scoreArr.push(scoreDiff)

    }
    
    
    let matchScore = scoreArr.indexOf(Math.min(...scoreArr));
    arb[matchScore].name
    
    let matchName = arb[matchScore].name;
    let matchImage = arb[matchScore].photo;
    //Add html to the #matchName div
    //Add html to the #matchImage div
    
    
    matchObj.name = matchName
    matchObj.image = matchImage
    
    
    arb.push(newFriend);

    res.send(matchObj)
}


module.exports = { friends: friends, friendsPost: friendsPost };