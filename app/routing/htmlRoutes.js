let path = require("path");

let home = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
};

let survey = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
}

module.exports = {home:home, survey:survey}
