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
        // START CODING!
        // *********************************************************************

        var lc = question.toLowerCase();
        var response = (response);
        var memory = require("./codecamp-memory" );

                    //  ASK HOW ALD 00110010 BOT IS vvvvvv
        if (lc.includes("old")) {
            response = ("I am only 3! 3 days old!");
        } else if (lc.includes("age")) {
                response = ("I am only 3! 3 days old!");
    //           THIS TELLS YOU THE WEATHER vvvvvv
        } else if (lc.includes("weather")) {
            response = "It should be around 85 degrees today. Friday July 21st.";
                // ASK 00110010 Bot HOW HE IS  vvvvvv
        } else if (lc.includes("how are you")) {
            response = "Im a bot. I dont know. How am I? You tell me!";
                // WHAT 00110010 BOT CAN DO   vvvvvv
        } else if (lc.includes("can you do")) {
            response = "I can tell jokes, I can chat with you, I can assist you, and I can even guess who you are!";
                    // GUESS MY IDENTITY GAME  vvvvvv
        } else if (lc.includes("my identity") || lc.includes("who am i") || lc.includes("who i am")) {
            response = " Oh so you want to play the game.....So lets start of with the easy question. Are you Male or Female?";
            memory.lastquestion = "gender";
                    //   ASK IF 00110010 Bot IS HUMAN  vvvvv 
        } else if (lc.includes("are you human")) {
            response = "no why would I want to be human. Humans are stupi-- um... I mean stupendous!";
        }

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
