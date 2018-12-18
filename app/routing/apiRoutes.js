const fs = require('fs');
const arb = require("../data/friends.js")
function readJSON() {
    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json())
}

let friends = function (req, res) {
    // console.log(req.body)
    res.json(arb)
}

let friendsPost = function (req, res) {
    const newFriend = req.body;
    let scoreArr = [];
    // The function that will compare the new person data to the saved array
    // A for loop to get the scores from the different people
    // A for loop to compare the current array to the others
    // console.log(arb[0].scores);
    // for (i in arb) {
    //     scoreArr.push(arb[i].scores)  
    // }
    let newScores = req.body.scores;
    // console.log(newScores);

    // console.log(oldScore[0]);
    // let scoreDiff = 0;
    console.log(arb.length);

    for (i in arb) {
        let scoreDiff = 0;
        let oldScore = arb[i].scores
        for (i = 0; i < newScores.length; i++) {
            //   Math.abs(parseInt(newScores[i] - oldScore[i]))
            // console.log(indDif);

            scoreDiff += Math.abs(parseInt(newScores[i]) - parseInt(oldScore[i]))


        }
        scoreArr.push(scoreDiff)
        console.log(scoreArr);

        // console.log(scoreDiff);
        // arb.push(newFriend);

        // res.send('SUCCESS')

    }
    // console.log(scoreDiff);
    console.log(scoreArr);
    console.log(scoreArr.indexOf(Math.min(...scoreArr)));
    let matchScore = scoreArr.indexOf(Math.min(...scoreArr));
    arb[matchScore].name
    console.log("your matches name: " + arb[matchScore].name);
    console.log("Photo of your match: " + arb[matchScore].photo);
    
    
    
    
    arb.push(newFriend);

    res.send('SUCCESS')
}


module.exports = { friends: friends, friendsPost: friendsPost };