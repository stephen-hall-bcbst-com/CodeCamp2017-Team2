'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        
        // *********************************************************************
     // Slack.postMessageToChannel(channelName, " okay hold on");

    var lc = question.toLowerCase();
    var response = (response);
    var memory = require("./codecamp-memory" );

                 // AGE
    if (lc.includes("age")) {
      response = ("I am actually less than a day old!");
    //           WEATHER
    } else if (lc.includes("weather")) {
        response = "It should be around 85 degree today. Friday July 21st.";
              // HOW ARE YOU
     } else if (lc.includes("how are you")) {
        response = "Im a bot. I dont know. How am I? You tell me!";
             // WHAT CAN YOU DO
    } else if (lc.includes("can you do")) {
        response = "I can tell jokes, I can chat with you, I can assist you, and I can even guess who you are!";
                 // GUESS MY IDENTITY
 } else if (lc.includes("guess my identity")) {
        response = " Oh so you want to play the game.....So lets start of with the easy question. Are you Male or Female?";
        memory.lastquestion = "gender";
    }













     Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
