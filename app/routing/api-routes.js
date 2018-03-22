var friends = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){

        var bestMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
        };
        
        console.log(req.body);

        // This is where I've been stuck.
        // I am going to use the video to help me through the rest of this.
        // I would not have been able to come up with and complete the logic of this app on my own.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++){
            console.log(friends[i]);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].score[j]));
                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);
        res.json(bestMatch);
    });
}