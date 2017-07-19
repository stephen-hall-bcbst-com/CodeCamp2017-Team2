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
    var response = "Sorry, cant help.";

    if (lc.includes("age")) {
        response = "I am actually less than a day old!";
    }

    
    if (lc.includes("weather")) {
        response = "It should be around 85 degree today. Friday July 21st.";
    }





















     Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
