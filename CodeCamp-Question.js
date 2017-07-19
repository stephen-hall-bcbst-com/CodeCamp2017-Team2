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

    
    if (lc.includes("age")) {
        response = ("I am actually less than a day old!");
    } else if (lc.includes("weather")) {
        response = "It should be around 85 degree today. Friday July 21st.";
    } else if (lc.includes("how are you")) {
        response = "Im a bot. I dont know. How am I? You tell me!";
    } else if (lc.includes("can you do")) {
        response = "I can tell jokes, I can annoy you, I can assist you, I can be a friend to people with no friends...like you!";
    } else {
    response = "Sorry, cant help.";
};
    














     Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
